import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  define: {
    'process.env.API_URL': JSON.stringify(process.env.API_URL ?? 'https://ecom-91-node.onrender.com'),
  },
  plugins: [
    react(),
     tailwindcss(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
