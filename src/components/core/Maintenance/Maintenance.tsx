import { Logo } from '../Logo'

export const Maintenance = () => {
	return (
		<div className='flex size-full flex-col items-center justify-center gap-4 px-4'>
			<div className='flex max-w-3xl flex-col items-center justify-center gap-2'>
				<h1 className='font-semibold text-3xl'>Estamos em manutenção</h1>
				<h2 className='text-balance text-center text-xl'>
					Nosso site está passando por uma atualização para ficar ainda melhor. Enquanto isso, continue acompanhando
					tudo o que Deus tem feito em nossa igreja!
				</h2>
			</div>
			<Logo height={200} width={200} />
			<div className='flex flex-col items-center justify-center'>
				<h3 className='text-lg'>Siga-nos nas redes sociais</h3>
				<div className='flex items-center gap-4'>
					<a href='https://www.instagram.com/anglicana.vida/' target='_blank'>
						<img alt='Instagram' height={60} src='/logos/instagram.svg' width={60} />
					</a>
					<a href='https://www.youtube.com/@AnglicanaVida' target='_blank'>
						<img alt='Youtube' height={80} src='/logos/youtube.png' width={80} />
					</a>
				</div>
			</div>
		</div>
	)
}
