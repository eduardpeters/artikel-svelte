import type { PostFile } from '$lib/types/posts.js';

export async function load({ fetch }) {
	const response = await fetch('/api/posts');
	const posts = (await response.json()) as PostFile[];

	return {
		posts
	};
}
