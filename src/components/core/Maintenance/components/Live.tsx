import { Play, Radio } from 'lucide-react'

import { Badge } from '@/components/core'

type LiveProps = {
	liveUrl?: string
}

export const Live = ({ liveUrl }: LiveProps) => {
	return (
		<section className='container mx-auto mt-56 px-4' id='ao-vivo'>
			<div className='mx-auto flex max-w-4xl flex-col items-center justify-center text-center'>
				<Badge className='mb-6 bg-white/10'>🔧 Site em manutenção</Badge>
				<h1 className='font-bold font-display text-4xl leading-tight tracking-tight md:text-6xl lg:text-7xl'>
					Estamos em manutenção
				</h1>
				<p className='text-lg text-white/70 sm:text-xl'>
					Nosso site está passando por melhorias, <br />
					mas não se preocupe continuamos transmitindo ao vivo!
				</p>
				<div className='mt-10 flex flex-col gap-4'>
					<p className='text-white/70'>Enquanto isso, acompanhe nosso culto pela transmissão abaixo.</p>
					<a href={liveUrl} rel='noopener noreferrer' target='_blank'>
						<button
							className='inline-flex h-11 cursor-pointer items-center justify-center gap-3 whitespace-nowrap rounded-full bg-white/90 px-10 py-7 font-semibold text-black text-lg shadow-2xl transition-all hover:scale-105 hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-30 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0'
							disabled={!liveUrl}
						>
							<Play fill='currentColor' /> Assistir agora
						</button>
					</a>
					<p className='inline-flex items-center justify-center gap-2.5 text-sm text-white/70'>
						<Radio /> {!liveUrl ? 'Transmissão indisponível no momento' : 'Transmissão via YouTube'}
					</p>
				</div>
			</div>
		</section>
	)
}
