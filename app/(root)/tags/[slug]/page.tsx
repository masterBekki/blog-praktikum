import Card from '@/components/cards/card'
import { getBlogsByTags } from '@/service/tag.service'
import { Dot, Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

async function SlugPage({params}:{params:{slug:string}}) {
	const tag = await getBlogsByTags(params.slug)

	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[30vh] flex items-center flex-col justify-end'>
				<h2 className='text-center text-4xl section-title font-creteRound'>
					<span>{tag.name}</span>
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
					<Link
						href={'/blogs'}
						className='opacity-90 hover:underline hover:opacity-100'
					>
						Blogs
					</Link>
					<Dot />
					<p className='text-muted-foreground capitalize'>Tags</p>
				</div>
			</div>

			<div className=' grid grid-cols-2 max-md:grid-col-1 gap-x-4 gap-y-24 mt-24'>
				{tag.blog.map(blog => (
					<Card key={blog.title} {...blog} isVertical={true} />
				))}
			</div>
		</div>
	)
}

export default SlugPage