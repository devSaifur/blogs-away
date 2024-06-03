import type { ApiType } from '@/server'
import { hc } from 'hono/client'

const client = hc<ApiType>('http://localhost:4321')

export const api = client.api
