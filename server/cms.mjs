import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const CONTENT_REL = 'data/content.json';
const UPLOAD_REL = 'public/media/uploads';

function env(name) {
  return process.env[name] || '';
}

function isHosted() {
  return process.env.NODE_ENV === 'production' || process.env.VERCEL === '1';
}

function adminUsername() {
  const configured = env('CMS_ADMIN_USERNAME');
  if (configured) return configured;
  if (!isHosted()) return 'admin';
  return '';
}

function adminPassword() {
  const configured = env('CMS_ADMIN_PASSWORD');
  if (configured) return configured;
  if (!isHosted()) return 'canopy-admin';
  return '';
}

function matchesSecret(given, expected) {
  const a = crypto.createHash('sha256').update(String(given)).digest();
  const b = crypto.createHash('sha256').update(String(expected)).digest();
  return crypto.timingSafeEqual(a, b);
}

function secret() {
  const configured = env('CMS_SECRET');
  if (configured) return configured;
  if (!isHosted()) return 'canopy-dev-secret';
  return '';
}

const loginFailures = new Map();

function clientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  const raw = Array.isArray(forwarded) ? forwarded[0] : forwarded || req.socket?.remoteAddress || 'local';
  return String(raw).split(',')[0].trim() || 'local';
}

function tooManyLogins(ip) {
  const now = Date.now();
  const recent = (loginFailures.get(ip) || []).filter((time) => now - time < 15 * 60 * 1000);
  loginFailures.set(ip, recent);
  return recent.length >= 8;
}

function noteLoginFailure(ip) {
  const now = Date.now();
  const recent = (loginFailures.get(ip) || []).filter((time) => now - time < 15 * 60 * 1000);
  recent.push(now);
  loginFailures.set(ip, recent);
}

function tokenTtlMs() {
  return 1000 * 60 * 60 * 12;
}

export function signToken() {
  const key = secret();
  if (!key) throw new Error('Sign-in is unavailable.');
  const exp = Date.now() + tokenTtlMs();
  const sig = crypto.createHmac('sha256', key).update(String(exp)).digest('hex');
  return `${exp}.${sig}`;
}

export function verifyToken(token) {
  const key = secret();
  if (!key || !token || !token.includes('.')) return false;
  const [exp, sig] = token.split('.');
  const expected = crypto.createHmac('sha256', key).update(String(exp)).digest('hex');
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return false;
  return Number(exp) > Date.now();
}

function bearer(req) {
  const header = req.headers.authorization || req.headers.Authorization || '';
  if (typeof header === 'string' && header.startsWith('Bearer ')) return header.slice(7);
  return '';
}

function readBody(req, limit = 12 * 1024 * 1024) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > limit) {
        reject(new Error('Upload is too large. Keep images under about 4 MB.'));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

function send(res, status, body) {
  const payload = typeof body === 'string' ? body : JSON.stringify(body);
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(payload);
}

function contentPath(root) {
  return path.join(root, CONTENT_REL);
}

function readLocal(root) {
  const file = contentPath(root);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function writeLocal(root, data) {
  const file = contentPath(root);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

function githubConfig() {
  const token = env('GITHUB_TOKEN');
  const repo = env('GITHUB_REPO') || 'siddhartha008/canopy-website';
  const branch = env('GITHUB_BRANCH') || 'main';
  if (!token) return null;
  return { token, repo, branch };
}

async function githubRequest(cfg, method, apiPath, body) {
  const response = await fetch(`https://api.github.com${apiPath}`, {
    method,
    headers: {
      Authorization: `Bearer ${cfg.token}`,
      Accept: 'application/vnd.github+json',
      'User-Agent': 'canopy-cms',
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await response.text();
  const json = text ? JSON.parse(text) : {};
  if (!response.ok) {
    const message = json.message || `GitHub request failed (${response.status})`;
    throw new Error(message);
  }
  return json;
}

async function githubGetFile(cfg, filePath) {
  try {
    const data = await githubRequest(
      cfg,
      'GET',
      `/repos/${cfg.repo}/contents/${filePath}?ref=${encodeURIComponent(cfg.branch)}`,
    );
    if (!data.content) return null;
    const decoded = Buffer.from(data.content.replace(/\n/g, ''), 'base64').toString('utf8');
    return { sha: data.sha, text: decoded };
  } catch (error) {
    if (String(error.message).includes('Not Found')) return null;
    throw error;
  }
}

async function githubPutFile(cfg, filePath, buffer, message) {
  const existing = await githubGetFile(cfg, filePath).catch(() => null);
  const body = {
    message,
    content: buffer.toString('base64'),
    branch: cfg.branch,
  };
  if (existing?.sha) body.sha = existing.sha;
  await githubRequest(cfg, 'PUT', `/repos/${cfg.repo}/contents/${filePath}`, body);
}

async function loadContent(root) {
  const cfg = githubConfig();
  if (cfg && isHosted()) {
    const remote = await githubGetFile(cfg, CONTENT_REL);
    if (remote?.text) return JSON.parse(remote.text);
  }
  return readLocal(root);
}

async function saveContent(root, payload) {
  const wrapped = {
    updatedAt: new Date().toISOString(),
    content: payload.content,
  };
  let wroteLocal = false;
  try {
    writeLocal(root, wrapped);
    wroteLocal = true;
  } catch {
    wroteLocal = false;
  }
  const cfg = githubConfig();
  if (cfg) {
    await githubPutFile(
      cfg,
      CONTENT_REL,
      Buffer.from(JSON.stringify(wrapped, null, 2)),
      'Update website content from CMS',
    );
    return { mode: 'github', wroteLocal };
  }
  if (!wroteLocal) {
    throw new Error(
      'Could not save. On the live site, set GITHUB_TOKEN, GITHUB_REPO, and GITHUB_BRANCH so the admin can publish.',
    );
  }
  return { mode: 'file', wroteLocal };
}

const EXT = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/webp': 'webp',
  'image/gif': 'gif',
  'application/pdf': 'pdf',
};

function sniffType(buffer) {
  if (buffer.length >= 8 && buffer.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return 'image/png';
  if (buffer.length >= 3 && buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff) return 'image/jpeg';
  if (buffer.length >= 6 && (buffer.subarray(0, 6).toString() === 'GIF87a' || buffer.subarray(0, 6).toString() === 'GIF89a')) return 'image/gif';
  if (buffer.length >= 12 && buffer.subarray(0, 4).toString() === 'RIFF' && buffer.subarray(8, 12).toString() === 'WEBP') return 'image/webp';
  if (buffer.length >= 5 && buffer.subarray(0, 5).toString() === '%PDF-') return 'application/pdf';
  return '';
}

async function saveUpload(root, { dataUrl }) {
  const match = String(dataUrl || '').match(/^data:[^;]+;base64,(.+)$/);
  if (!match) throw new Error('Invalid file data.');
  const buffer = Buffer.from(match[1], 'base64');
  if (buffer.length > 8 * 1024 * 1024) throw new Error('File is larger than 8 MB.');
  const mime = sniffType(buffer);
  if (!EXT[mime]) throw new Error('Upload a PNG, JPG, WEBP, GIF, or PDF.');
  const name = `${Date.now()}.${EXT[mime]}`;
  const urlPath = `/media/uploads/${name}`;
  const cfg = githubConfig();
  let wroteLocal = false;
  try {
    const dir = path.join(root, UPLOAD_REL);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, name), buffer);
    wroteLocal = true;
  } catch {
    wroteLocal = false;
  }
  if (cfg) {
    await githubPutFile(cfg, `public/media/uploads/${name}`, buffer, `Add media ${name} from CMS`);
    return { url: urlPath, mode: 'github' };
  }
  if (!wroteLocal) {
    throw new Error('Could not store the file. Configure GITHUB_TOKEN for the live site.');
  }
  return { url: urlPath, mode: 'file' };
}

function actionOf(req) {
  const url = new URL(req.url || '/', 'http://localhost');
  return url.searchParams.get('action') || '';
}

export async function handleCms(req, res, { root }) {
  try {
    const action = actionOf(req);
    const method = (req.method || 'GET').toUpperCase();

    if (action === 'status' && method === 'GET') {
      return send(res, 200, { ok: true });
    }

    if (action === 'login' && method === 'POST') {
      const ip = clientIp(req);
      if (tooManyLogins(ip)) return send(res, 429, { error: 'Too many attempts. Try again later.' });
      const username = adminUsername();
      const password = adminPassword();
      if (!username || !password || !secret()) {
        console.error('CMS sign-in is missing CMS_ADMIN_USERNAME, CMS_ADMIN_PASSWORD, or CMS_SECRET.');
        return send(res, 503, { error: 'Sign-in is unavailable.' });
      }
      const raw = await readBody(req, 16 * 1024);
      const body = JSON.parse(raw.toString('utf8') || '{}');
      const userOk = matchesSecret(String(body.username || ''), username);
      const passOk = matchesSecret(String(body.password || ''), password);
      if (!userOk || !passOk) {
        noteLoginFailure(ip);
        return send(res, 401, { error: 'Incorrect username or password.' });
      }
      loginFailures.delete(ip);
      return send(res, 200, { token: signToken() });
    }

    if (action === 'content' && method === 'GET') {
      const saved = await loadContent(root);
      return send(res, 200, saved || { content: null });
    }

    if (!verifyToken(bearer(req))) {
      return send(res, 401, { error: 'Sign in again to continue.' });
    }

    if (action === 'content' && method === 'PUT') {
      const raw = await readBody(req);
      const body = JSON.parse(raw.toString('utf8') || '{}');
      if (!body.content || typeof body.content !== 'object') {
        return send(res, 400, { error: 'Missing content.' });
      }
      const result = await saveContent(root, body);
      return send(res, 200, { ok: true, ...result });
    }

    if (action === 'upload' && method === 'POST') {
      const raw = await readBody(req);
      const body = JSON.parse(raw.toString('utf8') || '{}');
      const saved = await saveUpload(root, body);
      return send(res, 200, saved);
    }

    return send(res, 404, { error: 'Unknown CMS action.' });
  } catch (error) {
    console.error(error);
    const message = String(error?.message || 'CMS request failed.');
    const safe = /ghp_|github_pat_|bearer /i.test(message) ? 'CMS request failed.' : message.slice(0, 300);
    return send(res, 500, { error: safe });
  }
}
