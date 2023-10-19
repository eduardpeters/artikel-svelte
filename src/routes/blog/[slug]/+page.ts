import type { PostFile, PostSlugRouteData } from '$lib/types/posts.js';

export async function load({ params }): Promise<PostSlugRouteData> {
	const post = (await import(`../${params.slug}.md`)) as PostFile;
	const { title, date } = post.metadata;
	const content = post.default as any;

	return {
		content,
		title,
		date
	};
}
