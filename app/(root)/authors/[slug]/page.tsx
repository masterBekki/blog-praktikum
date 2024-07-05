import Card from '@/components/cards/card'
import { getBlogsByAuthor } from '@/service/author.service'
import { ArrowUpRight, Dot, Home } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

async function Page({ params }: { params: { slug: string } }) {
	const author = await getBlogsByAuthor(params.slug)

	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[30vh] flex items-center flex-col justify-end'>
				<h2 className='text-center text-4xl section-title font-creteRound'>
					<span>{author.name}</span>
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
					<p className='text-muted-foreground capitalize'>Author</p>
				</div>
			</div>

			<div className='grid grid-cols-2 max-md:grid-col-1 gap-x-4 gap-y-24 mt-16'>
				{author.blog.map(blog => (
					<Card key={blog.title} {...blog} isVertical={true} />
				))}
			</div>

			<div className='flex mt-20 gap-6 items-center max-md:flex-col'>
				<Image
					src={author.image.url}
					alt='author'
					width={155}
					height={155}
					className='rounded-md max-md:self-start'
				/>

				<div className='flex-1 flex flex-col space-y-4'>
					<h2 className='text-3xl font-creteRound'>{author.name}</h2>
					<p className='line-clamp-2 text-muted-foreground'>{author.bio}</p>
				</div>
			</div>
		</div>
	)
}

export default Page
