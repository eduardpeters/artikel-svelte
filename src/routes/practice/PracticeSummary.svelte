<script lang="ts">
	import type { Answer } from '$lib/types/answers';
	import correctIcon from '$lib/icons/correct-icon.svg';
	import incorrectIcon from '$lib/icons/incorrect-icon.svg';

	export let resetGame: () => void;
	export let answers: Answer[];
	let score = answers.reduce(
		(score, answer) => score + (answer.word.article.id === answer.choice.id ? 1 : 0),
		0
	);
</script>

<h2>Finished! Your score: {score}</h2>
<div class="summary__table">
	<div class="summary__table-row summary__table-header">
		<div>Noun</div>
		<div>Article</div>
		<div>Your answer</div>
		<div>Score</div>
	</div>
	{#each answers as answer}
		<div class="summary__table-row">
			<div>{answer.word.text}</div>
			<div>{answer.word.article.name}</div>
			<div>
				{answer.choice.name}
			</div>
			<img
				width="24"
				height="24"
				src={answer.word.article.id === answer.choice.id ? correctIcon : incorrectIcon}
				alt={answer.word.article.id === answer.choice.id ? 'YAY' : 'NAY'}
			/>
		</div>
	{/each}
</div>
<div class="summary__buttons">
	<button on:click={resetGame}>Retry words!</button>
	<button on:click={resetGame}>New words!</button>
</div>

<style>
	.summary__table {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: 0.5rem;
		width: 80%;
	}

	.summary__table-row {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		width: 100%;
	}

	.summary__table-row > div,
	.summary__table-row > img {
		text-align: center;
		width: 25%;
	}

	.summary__table-header {
		font-weight: bold;
		font-size: large;
	}

	.summary__buttons {
		display: flex;
		flex-direction: row;
		gap: 2rem;
		align-items: center;
	}

	button {
		all: unset;
		cursor: pointer;
		background-color: #2a9d8f;
		border-radius: 2rem;
		padding: 1rem;
		text-align: center;
		width: 5rem;
	}

	button:hover {
		scale: 1.1;
	}
</style>
