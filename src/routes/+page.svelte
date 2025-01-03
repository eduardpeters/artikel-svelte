<script lang="ts">
	import LargeNavLink from '$lib/components/LargeNavLink.svelte';
</script>

<main>
	<h1>
		<em>Willkommen</em> to <span class="der">Der</span><span class="die">Die</span><span class="das">Das</span>
	</h1>
	<p>A game to practice basic german article skills</p>
	<LargeNavLink to="/play" title="Play!" />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.der {
		color: var(--color-der);
	}

	.die {
		color: var(--color-die);
	}

	.das {
		color: var(--color-das);
	}
</style>
