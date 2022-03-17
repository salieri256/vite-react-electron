import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  root: 'src/renderer',
  base: './',
  build: {
    outDir: '../../out/renderer',
    emptyOutDir: true
  }
})