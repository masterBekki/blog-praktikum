import { IBlog, IDetailedBlog } from '@/types'
import request, { gql } from 'graphql-request'
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getBlogs = async () => {
	const query = gql`
		query MyQuery {
			blogs {
				title
				createdAt
				description
				slug
				tag {
					name
					slug
				}
				category {
					name
					slug
				}
				author {
					name
					image {
						url
					}
				}
				image {
					url
				}
				content {
					html
				}
			}
		}
	`

	const { blogs } = await request<{ blogs: IBlog[] }>(graphqlAPI, query)
	return blogs
}

export const getDetailedBlog = async (slug: string) => {
	const query = gql`
		query MyQuery($slug: String!) {
			blog(where: { slug: $slug }) {
				author {
					bio
					name
					slug
					image {
						url
					}
				}
				content {
					html
				}
				image {
					url
				}
				createdAt
				slug
				title
				tag {
					name
					slug
				}
			}
		}
	`
	const {blog} = await request<{ blog: IDetailedBlog }>(graphqlAPI, query, {
		slug,
	})
	return blog
}
