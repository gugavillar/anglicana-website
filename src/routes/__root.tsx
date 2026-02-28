import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'

import '../styles.css'

import { GoogleAnalytics, MicrosoftClarity } from '#/components/core'

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
				href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap',
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
	const isProduction = import.meta.env.DEV
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
			<body className='h-dvh w-dvw bg-background text-white antialiased'>
				{children}
				<Scripts />
				{isProduction && <MicrosoftClarity />}
				{isProduction && <GoogleAnalytics />}
			</body>
		</html>
	)
}
