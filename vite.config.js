import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  publicDir: 'public',
  root: './',
  build: {
    outDir: 'dist',
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/images/*',
          dest: 'assets/images',
        },
      ],
    }),
  ],
});
