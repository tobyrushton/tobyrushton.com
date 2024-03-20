import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/confg
export default defineConfig({
    integrations: [tailwind()],
})
