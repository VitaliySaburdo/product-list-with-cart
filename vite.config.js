import { defineConfig } from 'vite';
import { resolve } from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import posthtml from 'posthtml';
import include from 'posthtml-include';

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
    posthtmlPlugin(),
  ],
});
