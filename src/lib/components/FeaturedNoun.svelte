<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import type { Noun } from '$lib/types/nouns';
	import NounsService from '$lib/services/NounsService';
	import LoadingIndicator from './LoadingIndicator.svelte';

	let loadingNoun = $state(true);
	let noun = $state<Noun | null>(null);

	onMount(async () => {
		try {
			const nounResponse = await NounsService.getRandomNoun();
			noun = nounResponse;
		} catch (error) {
			console.error('Something went wrong...', error);
		} finally {
			loadingNoun = false;
		}
	});
</script>

<div>
	Display a random word
	{loadingNoun}
	{noun?.article}
	{noun?.noun}
</div>
