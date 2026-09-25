import { handleCms } from './cms.mjs';

export function cmsDevPlugin() {
  return {
    name: 'canopy-cms',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url || '';
        if (!url.startsWith('/api/cms')) return next();
        try {
          await handleCms(req, res, { root: process.cwd() });
        } catch (error) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: error.message || 'CMS failed' }));
        }
      });
    },
  };
}
