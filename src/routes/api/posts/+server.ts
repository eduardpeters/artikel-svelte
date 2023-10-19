import { fetchBlogPosts } from '$lib/utils/fetchBlogPosts';
import { json } from '@sveltejs/kit';

export async function GET(): Promise<Response> {
	const allPosts = await fetchBlogPosts();

	const sortedPosts = allPosts.sort((a, b) => {
		return new Date(b.metadata.date).valueOf() - new Date(a.metadata.date).valueOf();
	});

	return json(sortedPosts);
}
