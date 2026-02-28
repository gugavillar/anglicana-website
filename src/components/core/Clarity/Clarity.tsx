import { useEffect } from 'react'

const SCRIPT_ID = 'microsoft-clarity'

export const MicrosoftClarity = () => {
	useEffect(() => {
		if (document.getElementById(SCRIPT_ID)) return

		const script = document.createElement('script')
		script.id = SCRIPT_ID
		script.src = `(function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${import.meta.env.VITE_MICROSOFT_CLARITY}");`
		script.defer = true
		script.role = 'script'
		document.head.appendChild(script)
	}, [])

	return null
}
