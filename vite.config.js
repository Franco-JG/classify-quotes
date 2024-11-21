import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/classify-quotes/',
  server: {
    host: true,
  },
  build: {
    outDir: 'docs'
  },
  plugins: [react()],
})