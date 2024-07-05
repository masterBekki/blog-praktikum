import Card from '@/components/cards/card'
import { blogs } from '@/constants'
import { Dot, Home } from 'lucide-react'
import Link from 'next/link'

function Blogs() {
	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[40vh] flex items-center flex-col justify-end'>
				<h2 className='text-center text-4xl section-title font-creteRound'>
					<span>Blogs</span>
				</h2>

				<div className='flex gap-1 items-center mt-4'>
					<Home className='w-4 h-4' />
					<Link
						href={'/'}
						className='opacity-90 hover:underline hover:opacity-100'
					>
						Home
					</Link>
					<Dot />
					<p className='text-muted-foreground'>Blogs</p>
				</div>
			</div>
			<div className=' grid grid-cols-2 max-md:grid-col-1 gap-x-4 gap-y-24 mt-24'>
				{blogs.map(blog => (
					<Card key={blog.title} {...blog} isVertical={true} />
				))}
			</div>
		</div>
	)
}

export default Blogs
