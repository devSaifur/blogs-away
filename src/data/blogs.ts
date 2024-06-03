import { api } from '@/lib/api'

export async function getBlogById(id: string) {
    const res = await api.blogs[':id{[0-9]+}'].$get({ param: { id } })
    if (!res.ok) {
        throw new Error('Not found')
    }
    const { blog } = await res.json()
    return blog
}

export async function getBlogs() {
    const res = await api.blogs.$get()
    if (!res.ok) {
        throw new Error('Not found')
    }
    const { blogs } = await res.json()
    return blogs
}
