<script lang="ts">
	import ArticleButton from '$lib/components/ArticleButton.svelte';
	import type { Answer } from '$lib/types/answers.js';
	import type { Articles, Word } from '$lib/types/words';
	import PracticeSummary from './PracticeSummary.svelte';

	export let words: Word[];

	let index = 0;
	let answers: Answer[] = [];

	function submitChoice(word: Word, choice: Articles): void {
		answers.push({ word, choice });
		index += 1;
	}
</script>

<h1>Play the game here</h1>
{#if index < words.length}
	<h2>{words[index].text}</h2>
	<div class="choices__container">
		{#each words[index].choices as choice}
			<ArticleButton onClickHandler={() => submitChoice(words[index], choice)} {choice} />
		{/each}
	</div>
{:else}
	<PracticeSummary {answers} bind:index />
{/if}

<style>
	.choices__container {
		display: flex;
		flex-flow: row wrap;
		gap: 2rem;
		justify-content: center;
	}
</style>
