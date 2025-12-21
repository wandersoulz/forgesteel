import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import dynamicImport from 'vite-plugin-dynamic-import'

export default defineConfig({
  plugins: [dynamicImport(), dts({ include: ['src'] })],
  build: {
    lib: {
      // Entry point for your library
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'forgesteel',
      // The name of the output files
      fileName: 'forgesteel',
    },
  },
})