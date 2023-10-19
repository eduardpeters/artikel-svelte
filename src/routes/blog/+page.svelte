<script lang="ts">
	import type { PostRouteData } from '$lib/types/posts';

	export let data: PostRouteData;
</script>

<main>
	<h1>Blog</h1>

	<ul>
		{#each data.posts as post}
			<li>
				<h2>
					<a href={post.path}>
						{post.metadata.title}
					</a>
				</h2>
				Date: {post.metadata.date}
			</li>
		{/each}
	</ul>
</main>
