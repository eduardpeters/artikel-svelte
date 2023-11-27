<script lang="ts">
	import Practice from './Practice.svelte';

	export let data;
	const { words } = data;
</script>

<main>
	<Practice {words} />
	<a href="/">Return to Home</a>
</main>

<style>
	main {
		align-items: center;
		display: flex;
		flex-flow: column nowrap;
		gap: 1rem;
	}

	a {
		color: #e76f51;
	}
</style>
