<script lang="ts">
	import Practice from './Practice.svelte';

	export let data;
	const { words } = data;
</script>

<main>
	<Practice {words} />
</main>

<style>
	main {
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
	}
</style>
