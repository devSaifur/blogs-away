import { blogsSchema } from '@/lib/validators'
import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'

const mokeBlogPosts = [
    {
        id: 1,
        title: 'First post',
        description: 'Lorem ipsum dolor sit amet',
        pubDate: 'Jul 08 2022',
        heroImage: '/blog-placeholder-3.jpg',
    },
    {
        id: 2,
        title: 'Second post',
        description: 'Lorem ipsum dolor sit amet',
        pubDate: 'Jul 15 2022',
        heroImage: '/blog-placeholder-4.jpg',
    },
    {
        id: 3,
        title: 'Third post',
        description: 'Lorem ipsum dolor sit amet',
        pubDate: 'Jul 22 2022',
        heroImage: '/blog-placeholder-5.jpg',
    },
    {
        id: 4,
        title: 'Fourth post',
        description: 'Lorem ipsum dolor sit amet',
        pubDate: 'Jul 29 2022',
        heroImage: '/blog-placeholder-6.jpg',
    },
    {
        id: 5,
        title: 'Fifth post',
        description: 'Lorem ipsum dolor sit amet',
        pubDate: 'Aug 05 2022',
        heroImage: '/blog-placeholder-7.jpg',
    },
]

export const blogRoute = new Hono()
    .get('/', (c) => {
        return c.json({ blogs: mokeBlogPosts })
    })
    .get('/:id{[0-9]+}', (c) => {
        const id = c.req.param('id')
        const blog = mokeBlogPosts.find((p) => p.id === Number(id))
        if (!blog) {
            return c.json('Not found', 404)
        }
        return c.json({ blog })
    })
    .post('/', zValidator('json', blogsSchema), (c) => {
        const { title, description, heroImage } = c.req.valid('json')

        const id = mokeBlogPosts.length + 1
        const blog = {
            id,
            title,
            description,
            pubDate: new Date().toLocaleDateString(),
            heroImage,
        }
        mokeBlogPosts.push(blog)
        return c.json(blog)
    })
    .delete('/:id{[0-9]+}', (c) => {
        const id = c.req.param('id')
        const blog = mokeBlogPosts.find((p) => p.id === Number(id))
        if (!blog) {
            return c.json('Not found', 404)
        }
        const deletedBlog = mokeBlogPosts.splice(mokeBlogPosts.indexOf(blog), 1)
        return c.json({ blog: deletedBlog })
    })
    .patch('/:id{[0-9]+}', zValidator('json', blogsSchema), (c) => {
        const id = c.req.param('id')
        const blog = mokeBlogPosts.find((p) => p.id === Number(id))
        if (!blog) {
            return c.json('Not found', 404)
        }
        const { title, description, heroImage } = c.req.valid('json')
        blog.title = title
        blog.description = description
        blog.heroImage = heroImage
        return c.json(blog)
    })
