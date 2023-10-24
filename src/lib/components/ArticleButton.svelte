<script lang="ts">
	export let onClickHandler: any;
	export let choice: string;
</script>

<button on:click={onClickHandler}>{choice}</button>

<style>
	button {
		all: unset;
		background-color: aqua;
		cursor: pointer;
	}
</style>
