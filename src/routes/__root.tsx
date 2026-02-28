import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'

import '../styles.css'

export const Route = createRootRoute({
	head: () => ({
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
			</body>
		</html>
	)
}
