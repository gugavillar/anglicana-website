import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'

import '../styles.css'

import { Footer, GoogleAnalytics, MicrosoftClarity, Navbar } from '#/components/core'

export const Route = createRootRoute({
	head: () => ({
		links: [
			{
				crossOrigin: 'anonymous',
				href: 'https://fonts.gstatic.com',
				rel: 'preconnect',
			},
			{
				href: 'https://fonts.googleapis.com',
				rel: 'preconnect',
			},
			{
				href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Playfair:ital,opsz,wdth,wght@0,5..1200,87.5..112.5,700;1,5..1200,87.5..112.5,700&display=swap',
				rel: 'stylesheet',
			},
		],
		meta: [
			{
				charSet: 'utf-8',
			},
			{
				content: 'width=device-width, initial-scale=1',
				name: 'viewport',
			},
			{
				content: 'Site da Igreja Anglicana Vida em Gravatá',
				name: 'description',
			},
			{
				title: 'Igreja Anglicana Vida em Gravatá',
			},
		],
	}),
	shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
	const isProduction = import.meta.env.PROD
	return (
		<html lang='pt-BR' suppressHydrationWarning>
			<head>
				<meta content='Igreja Anglicana Vida' property='og:title' />
				<meta content='Site oficial da Igreja Anglicana Vida em Gravatá' property='og:description' />
				<meta content='https://anglicanavida.com.br/logos/logo.png' property='og:image' />
				<meta content='https://anglicanavida.com.br' property='og:url' />
				<meta content='website' property='og:type' />
				<HeadContent />
			</head>
			<body className='bg-background text-white antialiased'>
				<Navbar />
				{children}
				<Footer />
				<Scripts />
				{isProduction && <MicrosoftClarity />}
				{isProduction && <GoogleAnalytics />}
			</body>
		</html>
	)
}
