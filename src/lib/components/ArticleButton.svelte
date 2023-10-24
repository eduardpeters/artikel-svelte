<script lang="ts">
	import type { Dictonary } from '$lib/types/general';
	import { Articles } from '$lib/types/words';

	export let onClickHandler: any;
	export let choice: Articles;

	const colors: Dictonary<string> = {
		[Articles.DER]: '#0000FF',
		[Articles.DIE]: '#FF0000',
		[Articles.DAS]: '#00FF00'
	};
</script>

<button on:click={onClickHandler} style="--choice-color: {colors[choice]}">
	{choice}
</button>

<style>
	button {
		all: unset;
		background-color: var(--choice-color);
		border-radius: 2rem;
		cursor: pointer;
		padding: 1rem;
		text-align: center;
		width: 5rem;
	}
</style>
