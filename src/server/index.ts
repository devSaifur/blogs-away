import { Hono } from 'hono'

import { blogRoute } from './routes/blog'

const app = new Hono().basePath('/api').route('/blogs', blogRoute)

export default app

export type ApiType = typeof app
