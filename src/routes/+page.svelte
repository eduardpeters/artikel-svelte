<script lang="ts">
	import FeaturedNoun from '$lib/components/FeaturedNoun.svelte';
	import LargeNavLink from '$lib/components/LargeNavLink.svelte';
</script>

<main>
	<h1>
		<em>Willkommen</em> to <span class="der">Der</span><span class="die">Die</span><span class="das">Das</span>
	</h1>
	<p>A game to practice basic german article skills</p>
	<LargeNavLink to="/play" title="Play!" />
	<FeaturedNoun />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	h1 {
		text-align: center;
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
