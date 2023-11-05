<script lang="ts">
	export let route: string;
	export let title: string;
</script>

<a href={route}>{title}</a>

<style>
	a {
		all: unset;
		background-color: #e76f51;
		color: black;
		padding: 0.5rem 1rem;
		border-radius: 1rem;
		width: fit-content;
		font-weight: bold;
		cursor: pointer;
	}

	a:hover {
		background-color: #e34f2a;
	}
</style>
