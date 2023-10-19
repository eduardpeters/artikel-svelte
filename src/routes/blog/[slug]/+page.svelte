<script lang="ts">
	import type { PostSlugRouteData } from '$lib/types/posts';

	export let data: PostSlugRouteData;
</script>

<article>
	<h1>{data.title}</h1>
	<p>Published: {data.date}</p>
	<svelte:component this={data.content} />
</article>
