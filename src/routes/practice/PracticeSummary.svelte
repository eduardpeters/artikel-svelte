<script lang="ts">
	import type { Answer } from '$lib/types/answers';

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
			<div>{answer.word.article.id === answer.choice.id ? 'YAY' : 'NAY'}</div>
		</div>
	{/each}
</div>
<button on:click={resetGame}>Play again!</button>

<style>
	.summary__table {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		width: 80%;
	}

	.summary__table-row {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		width: 100%;
	}

	.summary__table-row > div {
		text-align: center;
		width: 25%;
	}

	.summary__table-header {
		font-weight: bold;
	}
</style>
