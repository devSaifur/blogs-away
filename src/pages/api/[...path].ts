import type { APIRoute } from 'astro'
import app from '../../server'

const handler: APIRoute = ({ request }) => app.fetch(request)

export { handler as ALL }
