import cloudflare from '@astrojs/cloudflare'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import path from 'path'

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [mdx(), sitemap(), tailwind()],
    output: 'server',
    adapter: cloudflare(),
    vite: {
        resolve: {
            alias: {
                '@': path.resolve(import.meta.dirname, './src'),
            },
        },
    },
})
