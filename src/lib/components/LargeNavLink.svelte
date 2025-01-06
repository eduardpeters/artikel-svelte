<script lang="ts">
	interface Props {
		to: string;
		title: string;
	}

	let { to, title }: Props = $props();
</script>

<a href={to}>{title}</a>

<style>
	a {
		all: unset;
		background-color: var(--color-accent-dark);
		cursor: pointer;
		padding: 1rem 2rem;
		border-radius: 2rem;
		text-align: center;
		min-width: 100px;
	}

	a:hover,
	a:active {
		outline: 2px solid var(--color-accent);
	}
</style>
