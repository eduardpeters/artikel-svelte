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
			<p>
				<span class={noun?.article.toLowerCase()}>{noun?.article}</span>
				<span> {noun?.noun}</span>
			</p>
			{#if noun?.is_plural}
				<p class="plural__text"><em>plural</em></p>
			{/if}
		</div>
	{/if}
</section>

<style>
	section {
		width: 100%;
		min-height: 7rem;
		border: 1px solid var(--color-accent-dark);
		border-radius: 1rem;
		padding: 1rem;
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
		margin: 0;
		font-size: 1rem;
	}

	p {
		margin: 0;
		font-size: 1.5rem;
	}

	section,
	.loading__container,
	.content__container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.loading__container {
		align-items: center;
	}

	.content__container {
		align-items: start;
	}

	.error__text {
		color: var(--color-accent);
	}

	.plural__text {
		font-size: 1rem;
	}

	.der {
		color: var(--color-der);
	}

	.die {
		color: var(--color-die);
	}

	.das {
		color: var(--color-das);
	}
</style>
