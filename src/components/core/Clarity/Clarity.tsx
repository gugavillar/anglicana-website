import { useEffect } from 'react'

const SCRIPT_ID = 'microsoft-clarity'

export const MicrosoftClarity = () => {
	useEffect(() => {
		if (!import.meta.env.VITE_MICROSOFT_CLARITY) return
		if (document.getElementById(SCRIPT_ID)) return

		const script = document.createElement('script')
		script.id = SCRIPT_ID
		script.src = `https://www.clarity.ms/tag/${import.meta.env.VITE_MICROSOFT_CLARITY}`
		script.async = true

		document.head.appendChild(script)
	}, [])

	return null
}
