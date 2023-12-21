<script lang="ts">
	import Practice from './Practice.svelte';

	export let data;
	const { words } = data;
	console.log(data);
</script>

<main>
	<h1>Play the game here</h1>
	<Practice {words} />
	<a href="/">Return to Home</a>
</main>

<style>
	main {
		align-items: center;
		display: flex;
		flex-flow: column nowrap;
		gap: 2rem;
	}

	h1 {
		margin: 1rem 0 0;
	}

	a {
		color: #e76f51;
	}
</style>
