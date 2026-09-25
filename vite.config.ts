import { cmsDevPlugin } from './server/vite-cms.mjs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), cmsDevPlugin()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
