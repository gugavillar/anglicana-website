import { createServerFn } from '@tanstack/react-start'

import { liveMiddleware } from './liveMiddleware'

export const liveYoutube = createServerFn({ method: 'GET' })
	.middleware([liveMiddleware])
	.handler(async ({ context }) => {
		return context
	})
