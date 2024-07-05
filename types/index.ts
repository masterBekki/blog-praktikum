export interface ChildProps {
	children: React.ReactNode
}

export interface IBlog {
	title: string
	description: string
	author: IAuthors
	category: ICategoryAndTags
	tag: ICategoryAndTags
	image: { url: string }
	createdAt: string
	content: { html: string }
	slug:string
}
export interface IDetailedBlog{
	author:IAuthors
	content : {html: string}
	image:{url:string}
	createdAt:string
	slug:string
	tag:ICategoryAndTags
	title:string
}
export interface IAuthors {
	name: string
	descr: string
	bio:string
	slug:string
	image: {
		url: string
	}
}

export interface ICategoryAndTags {
	slug: string
	name: string
}
