import { Link } from '@tanstack/react-router'

import { Logo } from '../Logo'

export const NotFound = () => {
	return (
		<div className='flex size-full flex-col items-center justify-center gap-4 px-4'>
			<div className='flex max-w-3xl flex-col items-center justify-center gap-2'>
				<h1 className='font-semibold text-3xl'>Página não encontrada</h1>
				<h2 className='text-balance text-center text-xl'>
					Parece que você se perdeu no caminho. A página que você está procurando não existe ou foi movida.
				</h2>
			</div>
			<Logo height={200} width={200} />
			<Link to='/'>Voltar para a página inicial</Link>
		</div>
	)
}
