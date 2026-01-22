import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import keystatic from '@keystatic/astro'
import vercel from '@astrojs/vercel'

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  integrations: [
    react(),
    mdx(),
    keystatic(),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
})
