export const Footer = () => {
	return (
		<footer className='border-t border-t-gray-300/20 py-10' id='contato'>
			<div className='container mx-auto'>
				<div className='mx-auto flex max-w-4xl flex-col items-center justify-center text-center'>
					<p className='text-lg'>Acompanhe nossas redes</p>
					<div className='flex flex-col items-center gap-8'>
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
			</div>
		</footer>
	)
}
