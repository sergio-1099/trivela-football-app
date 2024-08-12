import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.football-data.org', // The base URL of the API you are requesting from
        changeOrigin: true, // Changes the origin of the host header to the target URL
        rewrite: (path) => path.replace(/^\/api/, ''), // Rewrites the URL path, removing '/api'
      },
    },
  },
})
