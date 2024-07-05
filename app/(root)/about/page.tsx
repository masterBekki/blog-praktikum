import Author from '@/components/cards/author'
import { authors } from '@/constants'
import { Dot, Home } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

function AboutPage() {
	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[30vh] flex items-center flex-col justify-center'>
				<h2 className='text-center text-4xl section-title font-creteRound'>
					<span>About</span>
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
					<p className='text-muted-foreground'>About</p>
				</div>
			</div>

			<h1 className='text-center text-4xl font-creteRound'>
				We are the Bekki, <br /> Team of content writers and designers
			</h1>

			<div className='grid grid-cols-4 gap-4 min-h-96 mt-6'>
				<div className='col-span-2 max-md:col-span-4 relative h-80'>
					<Image
						fill
						src={'/about/01.jpg'}
						alt='about'
						className='rounded-md object-cover'
					/>
				</div>
				<div className='h-80 self-end relative max-md:col-span-2 max-md:72'>
					<Image
						fill
						src={'/about/00.jpg'}
						alt='about'
						className='rounded-md object-cover'
					/>
				</div>
				<div className='relative h-80 max-md:col-span-2 max-md:mb-8 max-md:h-72'>
					<Image
						fill
						src={'/about/02.jpg'}
						alt='about'
						className='rounded-md object-cover'
					/>
				</div>
			</div>

			<div className='max-w-6xl mx-auto mt-12 flex flex-col text-center space-y-4 text-muted-foreground'>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab expedita
					saepe, officiis nisi corporis impedit distinctio iure ducimus
					consequatur mollitia enim eligendi est quae, ipsum repudiandae numquam
					hic laboriosam esse quia. Sunt labore saepe quaerat consequuntur odit
					doloremque, officiis placeat quidem, hic maiores perspiciatis unde
					laborum beatae necessitatibus id eveniet!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab expedita
					saepe, officiis nisi corporis impedit distinctio iure ducimus
					consequatur mollitia enim eligendi est quae, ipsum repudiandae numquam
					hic laboriosam esse quia. Sunt labore saepe quaerat consequuntur odit
					doloremque, officiis placeat quidem, hic maiores perspiciatis unde
					laborum beatae necessitatibus id eveniet!
				</p>
			</div>

			<h2 className='text-center text-4xl section-title font-creteRound my-12'>
				<span>Our writers</span>
			</h2>

			<div className="flex justify-around max-md:flex-col max-md:space-y-4 max-md:items-center">
				{authors.map(author=>(
					<Author key={author.name} {...author}/>
				))}
			</div>
		</div>
	)
}

export default AboutPage
