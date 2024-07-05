import { IBlog } from '@/types'
import request, { gql } from 'graphql-request'
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getBlogsByAuthor = async (slug: string) => {
	const query = gql`
		query MyQuery($slug: String!) {
			author(where: { slug: $slug }) {
				blog {
					description
					category {
						name
						slug
					}
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
				bio
				name
				slug
				image {
					url
				}
				name
			}
		}
	`

	const { author } = await request<{
		author: { blog: IBlog[]; name: string, bio:string,slug:string,image:{url:string} }
	}>(graphqlAPI, query, {
		slug,
	})
	return author
}
