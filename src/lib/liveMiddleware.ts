import { createMiddleware } from '@tanstack/react-start'

import { getLiveVideo } from '@/services'

export const liveMiddleware = createMiddleware().server(async ({ next }) => {
	const items = await getLiveVideo()
		.then(({ items }) => items)
		.catch(() => [])

	return await next({
		context: {
			video: items,
		},
	})
})
