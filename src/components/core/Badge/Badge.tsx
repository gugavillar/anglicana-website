import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const Badge = ({ className, children, ...props }: ComponentProps<'div'>) => {
	return (
		<div
			className={twMerge(
				'inline-flex items-center gap-2 rounded-full border px-5 py-2.5 font-semibold text-sm uppercase tracking-widest',
				className
			)}
			{...props}
		>
			{children}
		</div>
	)
}
