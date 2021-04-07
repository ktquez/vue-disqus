const path = require('path')

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({ isProduction: true })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src'),
      name: 'VueSkipTo',
      formats: ['es', 'cjs', 'iife']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
