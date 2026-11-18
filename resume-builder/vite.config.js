import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'sb-574zxny6ss6m.vercel.run',
      'sb-7bukm5gu0tr2.vercel.run',
    ],
  },
})
