import { defineConfig } from 'vite';
import posthtml from 'posthtml';
import include from 'posthtml-include';
import { resolve } from 'path';
import copy from 'rollup-plugin-copy';

const posthtmlPlugin = () => {
  return {
    name: 'vite-plugin-posthtml',
    transformIndexHtml(html) {
      return posthtml([include({ root: resolve(__dirname, 'src') })])
        .process(html)
        .then(result => result.html);
    },
  };
};

export default defineConfig({
  base: '/',
  root: 'src',
  build: {
    outDir: 'dist',
    rollupOptions: {
      plugins: [
        copy({
          targets: [{ src: 'src/assets', dest: '../dist' }],
          hook: 'writeBundle',
        }),
      ],
    },
  },
  plugins: [posthtmlPlugin()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
