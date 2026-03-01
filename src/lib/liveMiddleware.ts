import { createMiddleware } from '@tanstack/react-start'

import { getLiveVideo } from '@/services/videos'

export const liveMiddleware = createMiddleware().server(async ({ next }) => {
	const { items } = await getLiveVideo()

	return await next({
		context: {
			video: items,
		},
	})
})
