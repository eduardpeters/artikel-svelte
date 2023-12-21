<script lang="ts">
	import type { Answer } from '$lib/types/answers.js';
	import type { Articles, Choice, Word } from '$lib/types/words';
	import ArticleButton from '$lib/components/ArticleButton.svelte';
	import PracticeSummary from './PracticeSummary.svelte';

	export let words: Word[];
	export let choices: Choice[];

	let index = 0;
	let answers: Answer[] = [];

	function submitChoice(word: Word, choice: number): void {
		answers.push({ word, choice });
		index += 1;
	}

	function resetGame(): void {
		answers = [];
		index = 0;
	}
</script>

{#if index < words.length}
	<h2>{words[index].text}</h2>
	<div class="choices__container">
		{#each choices as choice}
			<ArticleButton
				onClickHandler={() => submitChoice(words[index], choice.id)}
				choice={choice.name}
			/>
		{/each}
	</div>
{:else}
	<PracticeSummary {answers} {resetGame} />
{/if}

<style>
	h2 {
		margin: 0;
	}

	.choices__container {
		display: flex;
		flex-flow: row wrap;
		gap: 2rem;
		justify-content: center;
	}
</style>
