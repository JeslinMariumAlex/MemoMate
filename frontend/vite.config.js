import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy requests starting with /api to Django backend
      '/api': {
        target: 'http://localhost:8000', // Assuming Django runs on port 8000
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
