import { handleCms } from '../server/cms.mjs';

export default function handler(req, res) {
  return handleCms(req, res, { root: process.cwd() });
}
