import * as z from 'zod'

export const blogsSchema = z.object({
    title: z.string(),
    description: z.string(),
    heroImage: z.string().url(),
})

export type TBlogs = z.infer<typeof blogsSchema>
