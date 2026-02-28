import { useEffect } from 'react'

const SCRIPT_SRC_ID = 'google-analytics-src'
const SCRIPT_INLINE_ID = 'google-analytics-inline'

export const GoogleAnalytics = () => {
	useEffect(() => {
		const GA_ID = import.meta.env.VITE_GOOGLE_ANALYTICS
		if (!GA_ID) return

		if (document.getElementById(SCRIPT_SRC_ID)) return

		const scriptSrc = document.createElement('script')
		scriptSrc.id = SCRIPT_SRC_ID
		scriptSrc.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
		scriptSrc.async = true
		document.head.appendChild(scriptSrc)

		const scriptInline = document.createElement('script')
		scriptInline.id = SCRIPT_INLINE_ID
		scriptInline.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}');
    `
		document.head.appendChild(scriptInline)
	}, [])

	return null
}
