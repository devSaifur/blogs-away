import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { handler as ssrHandler } from '../../dist/server/entry.mjs'
import { apiRoutes } from './apiRoutes'

const app = new Hono()

const api = app.basePath('/api').route('/', apiRoutes)

app.use('/*', serveStatic({ root: './dist/client/' }))

app.use(ssrHandler)

console.log('Server is running on http://localhost:3000')

export default {
  fetch: app.fetch,
  port: process.env.PORT ?? 3000,
}

export type ApiType = typeof api
