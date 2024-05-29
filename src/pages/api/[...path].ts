import app from '@/server'
import type { APIRoute } from 'astro'

const handler: APIRoute = ({ request }) => app.fetch(request)

export { handler as ALL }
