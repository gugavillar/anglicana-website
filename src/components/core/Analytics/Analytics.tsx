import { useEffect } from 'react'

const SCRIPT_ID = 'google-analytics'
const TRACKING_ID = 'tracking-id'

export const GoogleAnalytics = () => {
	useEffect(() => {
		if (document.getElementById(SCRIPT_ID) || document.getElementById(TRACKING_ID)) return

		const script2 = document.createElement('script')
		script2.id = TRACKING_ID
		script2.src = `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GOOGLE_ANALYTICS}`
		script2.async = true
		script2.role = 'script'
		document.head.appendChild(script2)

		const script = document.createElement('script')
		script.id = SCRIPT_ID
		script.src = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${import.meta.env.VITE_GOOGLE_ANALYTICS});
        `
		script.defer = true
		script.role = 'script'
		document.head.appendChild(script)
	}, [])

	return null
}
