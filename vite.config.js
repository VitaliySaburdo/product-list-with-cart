import { defineConfig } from 'vite';
import posthtml from 'posthtml';
import include from 'posthtml-include';
import { resolve } from 'path';

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
  root: 'src',
  build: {
    outDir: 'dist',
  },
  plugins: [posthtmlPlugin()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  base: '/',
  publicDir: 'public',
});
