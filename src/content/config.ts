import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
    //type: 'content',
    schema: z.object({
        title: z.string(),
        image: z.string().optional(),
        tags: z.array(z.string()),
        repoUrl: z.string().url().optional(),
        demoUrl: z.string().url().optional(),
        videoId: z.string().optional(),
        description: z.string(),
        order: z.number(),
    }),
});

export const collections = { projects };