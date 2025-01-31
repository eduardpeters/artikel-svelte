<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import type { Noun } from '$lib/types/nouns';
	import NounsService from '$lib/services/NounsService';
	import LoadingIndicator from './LoadingIndicator.svelte';

	let loadingNoun = $state(true);
	let noun = $state<Noun | null>(null);

	onMount(async () => {
		try {
			const nounResponse = await NounsService.getRandomNoun();
			await new Promise<void>((resolve) => setTimeout(() => resolve(), 2000));
			noun = nounResponse;
		} catch (error) {
			console.error('Something went wrong...', error);
		} finally {
			loadingNoun = false;
		}
	});
</script>

<section>
	<h2>Featured Noun</h2>
	{#if loadingNoun}
		<div class="loading__container">
			<LoadingIndicator />
		</div>
	{:else if !loadingNoun && !noun}
		<div transition:fade class="content__container">
			<span class="error__text">An error has occurred</span>
		</div>
	{:else}
		<div transition:fade class="content__container">
			Display a random word
			{noun?.article}
			{noun?.noun}
		</div>
	{/if}
</section>

<style>
	section {
		width: 100%;
		min-height: 7rem;
		border: 1px solid var(--color-accent-dark);
		border-radius: 1rem;
	}
	@media screen and (min-width: 400px) and (max-width: 700px) {
		section {
			width: 80%;
		}
	}
	@media screen and (min-width: 700px) {
		section {
			width: 50%;
		}
	}

	h2 {
		font-size: 1rem;
	}

	section,
	.loading__container,
	.content__container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.content__container {
		padding: 1rem;
	}

	.error__text {
		color: var(--color-accent);
	}
</style>
