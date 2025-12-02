import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Change this to '/your-repo-name/' if deploying to username.github.io/repo-name
})

