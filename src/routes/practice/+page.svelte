<script lang="ts">
	import Practice from './Practice.svelte';
	import { words } from './words.js';
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
