/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsConfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isProduction = command === 'build';
  const base = isProduction ? '/rickandmemory/' : '/';

  return {
    base,
    cacheDir: './node_modules/.vite/rickandmemory',

    server: {
      port: 4200,
      host: 'localhost',
    },

    preview: {
      port: 4300,
      host: 'localhost',
    },

    plugins: [
      react(),
      viteTsConfigPaths({
        root: './',
      }),
    ],

    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [
    //    viteTsConfigPaths({
    //      root: './',
    //    }),
    //  ],
    // },

    test: {
      globals: true,
      cache: {
        dir: './node_modules/.vitest',
      },
      environment: 'jsdom',
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    },

    build: {
      modulePreload: false,
      target: 'esnext',
      minify: false,
      cssCodeSplit: false,
      outDir: 'dist/',
      assetsDir: '',
      emptyOutDir: true,
    },
  };
});
