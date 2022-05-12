import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'

export default defineConfig({
  test: {
    globals: true,
    setupFiles: 'src/setupTests.ts',
    environment: 'jsdom',
  },
  plugins: [react(), tsconfigPaths()],
})
