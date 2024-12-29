<script lang="ts">
	import type { PageData } from './$types';
	import { invalidateAll } from '$app/navigation';
	import { articles } from '$lib/constants/articles';
	import QuestionsService from '$lib/services/QuestionsService';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	let loading = $state(false);
	let feedback = $state<string | null>(null);

	async function answerQuestion(questionId: number, articleId: number) {
		loading = true;
		feedback = null;
		const questionAnswer = { questionId, articleId };
		try {
			const answerFeedback = await QuestionsService.postQuestionAnswer(questionAnswer);
			feedback = answerFeedback.feedback;
		} catch {
			console.error('Something went wrong...');
		} finally {
			loading = false;
		}
	}

	async function resetQuestion() {
		loading = true;
		feedback = null;
		await invalidateAll();
		loading = false;
	}
</script>

<h1>Let's practice</h1>
<p>What is the article for <em>{data.noun}</em>?</p>
<div>
	{#each articles as article}
		<button disabled={loading} onclick={() => answerQuestion(data.id, article.id)}>{article.article}</button>
	{/each}
</div>
{#if feedback === null && loading}
	<div>Checking answer...</div>
{:else if !loading && feedback}
	<div>Result: {feedback}</div>
	<button onclick={resetQuestion}>Play again</button>
{/if}
