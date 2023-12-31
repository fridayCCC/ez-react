import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts';
import {resolve} from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  dts({
    insertTypesEntry: true
  })],
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib/index.tsx"),
      name: 'ez-react',
      formats: ['es', 'umd'],
      fileName: (format) => `ez-react.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
          globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
          },
      },
  },
  }
})
