import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import alias from '@rollup/plugin-alias'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), alias()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@ui': path.resolve(__dirname, './src/ui'),
      '@_types': path.resolve(__dirname, './src/types')
    }
  },
  server: {
    port: 3000,
  }
})
