import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true, // generate .d.ts type declarations
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  // 👇 Exclude stories and tests from the bundle
  ignoreWatch: ['**/*.stories.*', '**/*.test.*'],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";', // Optional: for React Server Components support
    };
  },
});
