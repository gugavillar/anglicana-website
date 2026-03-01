import { Logo } from '../Logo'

export const Navbar = () => {
	return (
		<header className='fixed top-0 right-0 left-0 z-50 border-b border-b-gray-300/80 bg-background'>
			<div className='container mx-auto flex items-center justify-between px-4 py-4'>
				<div className='flex items-center gap-3'>
					<Logo className='size-8' />
					<div>
						<h2 className='font-display font-semibold text-lg'>Igreja Anglicana Vida</h2>
						<p className='text-sm text-white/70'>Gravatá - PE</p>
					</div>
				</div>
			</div>
		</header>
	)
}
