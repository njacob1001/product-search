import { defineConfig } from 'vite'
// import * as svgrPlugin from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // This changes the out put dir from dist to build
  // comment this out if that isn't relevant for your project
  envPrefix: 'MELI_',
  build: {
    outDir: 'build',
  },
  plugins: [
    react(),
    tsconfigPaths(),
    // svgrPlugin({
    //   svgrOptions: {
    //     icon: true,
    //     // ...svgr options (https://react-svgr.com/docs/options/)
    //   },
    // }),
  ],
})
