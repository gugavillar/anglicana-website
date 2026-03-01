import { Badge } from '@/components/core'

const Card = ({
	icon,
	title,
	time,
	description,
}: {
	icon: string
	title: string
	time: string
	description: string
}) => {
	return (
		<div className='group rounded-lg border border-gray-300/20 bg-white/10 shadow-sm backdrop-blur-sm transition-all hover:border-gray-300 hover:bg-white/25'>
			<div className='flex flex-col items-center p-6 text-center'>
				<span className='mb-3 text-3xl'>{icon}</span>
				<h3 className='font-semibold text-lg text-white/70'>{title}</h3>
				<p className='mt-1 font-bold text-2xl text-white'>{time}</p>
				<p className='mt-2 text-sm text-white/70'>{description}</p>
			</div>
		</div>
	)
}

export const Schedules = () => {
	return (
		<section className='container mx-auto mt-48 px-4 pb-20' id='horários'>
			<div className='mx-auto flex max-w-4xl flex-col items-center justify-center text-center'>
				<Badge className='mb-6 bg-white/10'>🕓 Programação</Badge>
				<h2 className='font-bold font-display text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl'>
					Horário dos cultos
				</h2>
				<p className='text-lg text-white/70 sm:text-xl'>Acompanhe nossas transmissões regulares</p>
				<div className='mt-8 grid w-full gap-4 sm:grid-cols-3'>
					<Card description='Culto matinal' icon='☀️' time='10:00' title='Domingo' />
					<Card description='Culto vespertino' icon='🌅' time='18:00' title='Domingo' />
					<Card description='Culto de oração' icon='🙏🏻' time='20:00' title='Quarta-feira' />
				</div>
			</div>
		</section>
	)
}
