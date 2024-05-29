import { Hono } from 'hono'
import { blogRoute } from './routes/blog'

export const apiRoutes = new Hono().route('/blog', blogRoute)
