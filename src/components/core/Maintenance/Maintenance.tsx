import type { GetLiveVideoResponse } from '@/services/videos'

import { Logo } from '../Logo'

type MaintenanceProps = {
	video: GetLiveVideoResponse['items']
}

export const Maintenance = ({ video }: MaintenanceProps) => {
	return (
		<div className='flex size-full flex-col items-center justify-center gap-6 px-4'>
			<div className='flex max-w-3xl flex-col items-center justify-center gap-2'>
				<h1 className='mb-4 font-semibold text-3xl md:text-4xl'>Estamos em manutenção</h1>
				<div>
					<p className='text-balance text-center text-md leading-relaxed md:text-lg'>
						Nosso site está passando por uma atualização para ficar ainda melhor.
					</p>
					<p className='text-balance text-center text-md leading-relaxed md:text-lg'>
						Enquanto isso, continue acompanhando tudo o que Deus tem feito em nossa igreja!
					</p>
				</div>
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
			{Boolean(video?.length) && (
				<div className='flex items-center justify-center'>
					<a
						className='font-semibold text-red-500 text-xl'
						href={`https://www.youtube.com/watch?v=${video[0].id.videoId}`}
						target='_blank'
					>
						Estamos ao vivo!
					</a>
				</div>
			)}
		</div>
	)
}
