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
		color: var(--color-accent);
		text-decoration: underline;
		cursor: pointer;
	}

	a:hover,
	a:active {
		color: var(--color-accent-dark);
	}
</style>
