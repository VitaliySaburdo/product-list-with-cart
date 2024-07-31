import { defineConfig } from 'vite';

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
