<script lang="ts">
	import ArticleButton from '$lib/components/ArticleButton.svelte';
	import type { Answer } from '$lib/types/answers.js';
	import type { Word } from '$lib/types/words';

	export let words: Word[];

	let index = 0;
	let score = 0;
	let isValidPlay = true;
	let answers: Answer[] = [];

	function submitChoice(choice: string): void {
		if (choice === words[index].article) {
			if (isValidPlay) {
				score += 1;
			} else {
				isValidPlay = true;
			}
			index += 1;
		} else {
			alert('Try again!');
			isValidPlay = false;
		}
	}

	function resetGame(): void {
		index = 0;
		score = 0;
		isValidPlay = true;
	}
</script>

<h1>Play the game here</h1>
{#if index < words.length}
	<h3>{words[index].text}</h3>
	<div class="choices__container">
		{#each words[index].choices as choice}
			<ArticleButton onClickHandler={() => submitChoice(choice)} {choice} />
		{/each}
	</div>
	<h1>{score}</h1>
{:else}
	<h2>Finished! Your score: {score}</h2>
	<button on:click={resetGame}>Play again!</button>
{/if}

<style>
	.choices__container {
		display: flex;
		flex-flow: row wrap;
		gap: 2rem;
		justify-content: center;
	}
</style>
