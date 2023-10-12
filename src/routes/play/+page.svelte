<script lang="ts">
	import { words } from './words.js';
	let index = 0;
	let score = 0;

	function submitChoice(choice: string): void {
		if (choice === words[index].article) {
			score += 1;
			index += 1;
		} else {
			alert('Try again!');
		}
	}
</script>

<main>
	<h1>Play the game here</h1>
	{#if index < words.length}
		<h3>{words[index].text}</h3>
		{#each words[index].choices as choice}
			<button on:click={() => submitChoice(choice)}>{choice}</button>
		{/each}
		<h1>{score}</h1>
	{:else}
		<h2>Finished! Your score: {score}</h2>
	{/if}
</main>
