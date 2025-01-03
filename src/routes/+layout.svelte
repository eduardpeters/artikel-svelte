<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>DerDieDas</title>
	<meta name="description" content="A game to practice basic german article skills" />
</svelte:head>
<div>
	{@render children()}
</div>

<style>
	div {
		padding: 1rem;
	}
</style>
