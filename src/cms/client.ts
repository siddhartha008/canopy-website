const TOKEN_KEY = 'canopy-cms-token';

export function getToken() {
  return sessionStorage.getItem(TOKEN_KEY) || '';
}

export function setToken(token: string) {
  if (token) sessionStorage.setItem(TOKEN_KEY, token);
  else sessionStorage.removeItem(TOKEN_KEY);
}

async function request(action: string, method: string, body?: unknown) {
  const headers: Record<string, string> = {};
  const token = getToken();
  if (token) headers.Authorization = `Bearer ${token}`;
  if (body !== undefined) headers['Content-Type'] = 'application/json';
  const response = await fetch(`/api/cms?action=${action}`, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || 'Request failed');
  return data;
}

export function login(username: string, password: string) {
  return request('login', 'POST', { username, password }) as Promise<{ token: string }>;
}

export function saveContent(content: unknown) {
  return request('content', 'PUT', { content }) as Promise<{ ok: boolean; mode: string }>;
}

export async function uploadFile(file: File) {
  const dataUrl = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error('Could not read that file.'));
    reader.readAsDataURL(file);
  });
  return request('upload', 'POST', {
    filename: file.name,
    mime: file.type,
    dataUrl,
  }) as Promise<{ url: string; mode: string }>;
}
