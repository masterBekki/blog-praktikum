export interface ChildProps{
	children:React.ReactNode
}

export interface ICard{
	title:string,
  description:string,
  image:string,
	author:string,
	date:string,
	tags:string[]
}

export interface IAuthors{
	name:string
	descr?:string
	image:string
}