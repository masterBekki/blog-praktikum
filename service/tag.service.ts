import { IBlog } from '@/types'
import request, { gql } from 'graphql-request'
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getBlogsByTags = async (slug: string) => {
	const query = gql`
		query MyQuery($slug: String!) {
			tag(where: { slug: $slug }) {
				blog {
					description
					category{
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
				name
			}
		}
	`

	const { tag } = await request<{ tag: { blog: IBlog[]; name: string } }>(
		graphqlAPI,
		query,
		{
			slug,
		}
	)
	return tag
}
