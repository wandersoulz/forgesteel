import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import dynamicImport from 'vite-plugin-dynamic-import'

export default defineConfig({
  plugins: [dynamicImport(), dts({ include: ['src'] })],
  build: {
    lib: {
      // Entry point for your library
      entry: {
        forgesteel: resolve(__dirname, 'src/index.ts'),
        data: resolve(__dirname, 'src/data/index.ts')
      }
    },
  },
})