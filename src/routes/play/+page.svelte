<script lang="ts">
	const word = {
		text: 'Auto',
		article: 'das',
		choices: ['der', 'die', 'das']
	};

	function submitChoice(choice: string): void {
		if (choice === word.article) {
			alert('Excellent!');
		} else {
			alert('Try again!');
		}
	}
</script>

<main>
	<h1>Play the game here</h1>
	<h3>{word.text}</h3>
	{#each word.choices as choice}
		<button on:click={() => submitChoice(choice)}>{choice}</button>
	{/each}
</main>
