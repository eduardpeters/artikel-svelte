<script lang="ts">
	import type { PageData } from './$types';

	interface Article {
		id: number;
		article: string;
	}

	interface Feedback {
		feedback: string;
	}

	let { data }: { data: PageData } = $props();

	let loading = $state(false);
	let feedback = $state<string | null>(null);

	const articles: Article[] = [
		{ id: 1, article: 'Der' },
		{ id: 2, article: 'Die' },
		{ id: 3, article: 'Das' },
	];

	async function answerQuestion(questionId: number, articleId: number) {
		const data = { question_id: questionId, answer: articleId };
		const response = await fetch('/api/answers', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const answerFeedback = (await response.json()) as Feedback;

		feedback = answerFeedback.feedback;
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
	<button onclick={() => location.reload()}>Play again</button>
{/if}
