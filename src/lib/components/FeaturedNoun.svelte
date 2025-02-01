<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import type { Noun } from '$lib/types/nouns';
	import NounsService from '$lib/services/NounsService';
	import LoadingIndicator from './LoadingIndicator.svelte';

	const SEARCH_BASE_URL = 'https://www.google.com/search?q=';

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
			<span class="error__text">Unable to retrieve featured noun</span>
		</div>
	{:else}
		<div transition:fade class="content__container">
			<div class="content__container--left">
				<p>
					<span class={noun?.article.toLowerCase()}>{noun?.article}</span>
					<span> {noun?.noun}</span>
				</p>
				{#if noun?.is_plural}
					<p class="plural__text"><em>plural</em></p>
				{/if}
			</div>
			<div class="content__container--right">
				<a
					href={`${SEARCH_BASE_URL}${noun?.noun}`}
					target="_blank"
					rel="noopener noreferrer"
					title={`search for ${noun?.noun}`}
					aria-label={`search for ${noun?.noun}`}>🔍</a
				>
			</div>
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
		box-shadow: 2px 2px 2px var(--color-accent-dark);
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

	a {
		all: unset;
		cursor: pointer;
		font-size: 2rem;
	}

	section,
	.loading__container,
	.content__container {
		display: flex;
		gap: 1rem;
	}
	section,
	.loading__container {
		flex-direction: column;
	}

	.loading__container {
		align-items: center;
	}

	.content__container {
		flex-direction: row;
		justify-content: space-between;
	}

	.content__container--left,
	.content__container--right {
		display: flex;
		flex-direction: column;
	}
	.content__container--left {
		gap: 1rem;
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
