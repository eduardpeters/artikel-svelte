import type { PostFile, PostMetaPath } from '$lib/types/posts';

export async function fetchBlogPosts(): Promise<PostMetaPath[]> {
	const allPostsFiles = import.meta.glob('/src/routes/blog/*.md');
	const iterablePostFiles = Object.entries(allPostsFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = (await resolver()) as PostFile;
			const postPath = path.slice(11, -3);

			return {
				metadata,
				path: postPath
			};
		})
	);

	return allPosts;
}
