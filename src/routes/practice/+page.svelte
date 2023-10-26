<script lang="ts">
	import ArticleButton from '$lib/components/ArticleButton.svelte';
	import { words } from './words.js';

	let index = 0;
	let score = 0;
	let isValidPlay = true;

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

<main>
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
</main>

<style>
	main {
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
	}

	.choices__container {
		display: flex;
		flex-flow: row wrap;
		gap: 2rem;
		justify-content: center;
	}
</style>
