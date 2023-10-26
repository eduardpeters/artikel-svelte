<script lang="ts">
	import type { Answer } from '$lib/types/answers';

	export let index: number;
	export let answers: Answer[];
	let score = answers.reduce(
		(score, answer) => score + (answer.word.article === answer.choice ? 1 : 0),
		0
	);

	function resetGame(): void {
		index = 0;
	}
</script>

<h2>Finished! Your score: {score}</h2>
<button on:click={resetGame}>Play again!</button>
