import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/canopy-nepal/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
