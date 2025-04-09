import { http, HttpResponse } from 'msw'
import { mockProperties } from './data'

export const handlers = [
    http.get('/api/properties', () => {
        return HttpResponse.json(mockProperties)
    }),
]