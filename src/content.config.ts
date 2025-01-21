import { glob } from 'astro/loaders'
import { z, defineCollection } from 'astro:content'

const blog = defineCollection({
    loader: glob({ pattern: "**/[^_]*.md", base: "./src/posts" }),
    schema: z.object({
        title: z.string(),
        date: z.string(),
        description: z.string(),
        slug: z.string(),
    })
})

export const collections = { blog}