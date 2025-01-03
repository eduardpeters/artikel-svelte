<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div>
	{@render children()}
</div>

<style>
	div {
		padding: 1rem;
	}
</style>
