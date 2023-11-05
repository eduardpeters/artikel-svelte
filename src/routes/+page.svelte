<script>
	import NavAnchor from '$lib/components/NavAnchor.svelte';
</script>

<main>
	<div class="header">
		<h1><em>Willkommen</em> to DerDieDas</h1>
		<p>A game to practice basic german skills</p>
		<h3>Here are the shortcuts:</h3>
		<nav>
			<a href="/">Challenge</a>
			<a href="/practice">Practice</a>
			<a href="/blog">Microblogs</a>
		</nav>
	</div>
	<section>
		<h2>The challenge</h2>
		<p>
			Play through your choice of some number of german nouns for which you will have to correctly
			select the article. Your score will be the length your streak selecting the correct articles
		</p>
		<p>
			An arcade inspired leaderboard is available to measure up to the competition. Good luck
			getting your mark to the top!
		</p>
		<NavAnchor route="/challenge" title="To challenge!" />
	</section>
	<section>
		<h2>Practice for a while</h2>
		<p>
			In practice mode, you'll receive a random set of 10 nouns and play through them all. At the
			end, you'll be able to see how well you did and get feedback on any mistakes.
		</p>
		<NavAnchor route="/practice" title="Practice!" />
	</section>
	<section>
		<h2>Microblogs</h2>
		<p>
			Getting from idea to launch is not an easy journey. In order to blow off some steam, these
			small fragments of the story of this project have kept development open and reflective.
		</p>
		<NavAnchor route="/blog" title="Visit the blogs!" />
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h1,
	h2,
	h3,
	p {
		margin: 0;
	}

	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		text-align: center;
		border-bottom: 1px solid #264653;
	}

	nav {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		width: 100%;
	}

	nav > a {
		color: #e76f51;
	}

	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		max-width: 425px;
	}
</style>
