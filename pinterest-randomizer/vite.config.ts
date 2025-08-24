import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copy } from 'fs-extra'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-redirects',
      writeBundle() {
        copy(
          resolve(__dirname, 'client/_redirects'),
          resolve(__dirname, 'dist/_redirects')
        )
      }
    }
  ],
})
