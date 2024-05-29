import { Hono } from 'hono'

const mokeBlogPosts = [
  {
    title: 'First post',
    description: 'Lorem ipsum dolor sit amet',
    pubDate: 'Jul 08 2022',
    heroImage: '/blog-placeholder-3.jpg',
  },
  {
    title: 'Second post',
    description: 'Lorem ipsum dolor sit amet',
    pubDate: 'Jul 15 2022',
    heroImage: '/blog-placeholder-4.jpg',
  },
]

export const blogRoute = new Hono().get('/', (c) => {
  return c.json(mokeBlogPosts)
})
