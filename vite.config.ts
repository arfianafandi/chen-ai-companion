import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Ensures relative paths for GitHub Pages, Vercel, Netlify, and local preview
  server: {
    port: 5173,
    host: true,
  },
  assetsInclude: ['**/*.pmx', '**/*.vmd', '**/*.wav', '**/*.png'],
});
