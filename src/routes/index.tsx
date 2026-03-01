import { createFileRoute } from '@tanstack/react-router'

import { Maintenance } from '#/components/core'
import { liveYoutube } from '@/lib/liveYoutube'

export const Route = createFileRoute('/')({
	beforeLoad: async () => {
		const { video } = await liveYoutube()
		return {
			video,
		}
	},
	component: App,
})

function App() {
	const { video } = Route.useRouteContext()
	return <Maintenance video={video} />
}
