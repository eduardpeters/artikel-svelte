<script lang="ts">
	import arrowIcon from '$lib/icons/diagonal-arrow-icon.svg';

	export let route: string;
	export let title: string;
</script>

<a href={route}>
	{title}
	<img src={arrowIcon} alt="A top right facing diagonally directed arrow" height={25} width={25} />
</a>

<style>
	a {
		all: unset;
		align-items: center;
		background-color: #e76f51;
		border-radius: 1rem;
		color: black;
		cursor: pointer;
		display: flex;
		font-weight: bold;
		gap: 0.2rem;
		padding: 0.5rem 1rem;
		width: fit-content;
	}

	a:hover {
		background-color: #e34f2a;
	}
</style>
