import { createFileRoute } from '@tanstack/react-router'

import { Maintenance } from '#/components/core'

export const Route = createFileRoute('/')({ component: App })

function App() {
	return <Maintenance />
}
