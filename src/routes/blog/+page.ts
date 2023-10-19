import type { PostMetaPath, PostRouteData } from '$lib/types/posts.js';

export async function load({ fetch }): Promise<PostRouteData> {
	const response = await fetch('/api/posts');
	const posts = (await response.json()) as PostMetaPath[];

	return {
		posts
	};
}
