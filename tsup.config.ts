import { defineConfig } from 'tsup';

export default defineConfig({
  entry: { index: 'src/index.ts' },
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: false,
  clean: true,
  splitting: false,
  treeshake: true,
  injectStyle: false,
  loader: {
    '.woff2': 'file',
  },
  external: ['react', 'react-dom'],
});
