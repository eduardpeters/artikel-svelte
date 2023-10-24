<script lang="ts">
	import type { Articles } from '$lib/types/words';

	export let onClickHandler: any;
	export let choice: Articles;
</script>

<button on:click={onClickHandler}>{choice}</button>

<style>
	button {
		all: unset;
		background-color: aqua;
		cursor: pointer;
		width: 5rem;
		border-radius: 2rem;
		text-align: center;
		padding: 1rem;
	}
</style>
