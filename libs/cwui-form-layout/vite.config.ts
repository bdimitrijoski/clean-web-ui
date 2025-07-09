import { relative, resolve } from 'path';
import { defineConfig } from 'vitest/config';
import dts from 'vite-plugin-dts';
import { workspaceRoot } from '@nx/devkit';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { normalizePath } from 'vite';

export default defineConfig({
  cacheDir: `${workspaceRoot}/node_modules/.vite/${relative(workspaceRoot, __dirname)}`,
  root: __dirname,
  publicDir: 'dist/libs',
  plugins: [
    dts({
      entryRoot: 'src',
      tsconfigPath: resolve(__dirname, 'tsconfig.lib.json'),
    }),
    viteStaticCopy({
      targets: [
        {
          src: normalizePath(resolve(__dirname, 'README.md')),
          dest: '', // copies directly into outDir
        },
      ],
    }),
  ],
  build: {
    emptyOutDir: true,
    lib: {
      entry: 'src/index.ts',
      name: 'cwui-split-layout',
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'index.esm.js' : 'index.cjs.js'),
    },
    outDir: resolve(__dirname, '../../dist/libs/cwui-split-layout'),
    minify: 'terser', // Use terser to produce min version
    rollupOptions: {
      external: [], // Add external deps here to avoid bundling them
    },
    sourcemap: false,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    reporters: ['default'],
    css: false,
    isolate: true,
    include: ['src/**/*.spec.ts'],
  },
});
