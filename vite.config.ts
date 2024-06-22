import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  envPrefix: 'REMIX',
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true
      }
    }),
    tsconfigPaths()
  ],
  server: {
    host: '127.0.0.1',
    port: 3000
  },
  ssr: {
    noExternal: ['@apollo/client']
  }
})
