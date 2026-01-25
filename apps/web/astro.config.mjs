import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import keystatic from '@keystatic/astro'
import node from '@astrojs/node'

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [
    react(),
    mdx(),
    keystatic(),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
})
