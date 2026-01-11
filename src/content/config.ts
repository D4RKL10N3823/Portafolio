import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        desc: z.string(),
        challenge: z.string(),
        solution: z.string(),
        img: z.string(),
        tech: z.array(z.string()),
        github: z.string(),
        web: z.string().optional().nullable(),
    })
})

export const collections = { projects }