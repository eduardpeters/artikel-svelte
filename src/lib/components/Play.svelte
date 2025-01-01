<script lang="ts">
	import { onMount } from 'svelte';
	import { articles } from '$lib/constants/articles';
	import QuestionsService from '$lib/services/QuestionsService';
	import type { Question } from '$lib/types/questions';

	let loadingQuestion = $state(true);
	let loadingFeedback = $state(false);
	let question = $state<Question | null>(null);
	let feedback = $state<string | null>(null);

	async function fetchRandomQuestion() {
		loadingQuestion = true;
		question = null;
		try {
			const questionResponse = await QuestionsService.getRandomQuestion();
			question = questionResponse;
		} catch {
			console.error('Something went wrong...');
		} finally {
			loadingQuestion = false;
		}
	}
	onMount(async () => {
		fetchRandomQuestion();
	});

	async function answerQuestion(questionId: number, articleId: number) {
		loadingFeedback = true;
		feedback = null;
		const questionAnswer = { questionId, articleId };
		try {
			const answerFeedback = await QuestionsService.postQuestionAnswer(questionAnswer);
			feedback = answerFeedback.feedback;
		} catch {
			console.error('Something went wrong...');
		} finally {
			loadingFeedback = false;
		}
	}

	async function resetQuestion() {
		feedback = null;
		fetchRandomQuestion();
	}
</script>

<h1>Let's practice</h1>
<p>What is the article for <em>{question ? question.noun : '...'}</em>?</p>
{#if loadingQuestion}
	<span>Loading...</span>
{:else if !loadingQuestion && question}
	<div>
		{#each articles as article}
			<button disabled={loadingQuestion} onclick={() => answerQuestion(question!.id, article.id)}
				>{article.article}</button
			>
		{/each}
	</div>
{/if}
{#if feedback === null && loadingFeedback}
	<div>Checking answer...</div>
{:else if !loadingFeedback && feedback}
	<div>Result: {feedback}</div>
	<button onclick={resetQuestion}>Play again</button>
{/if}
{#if !loadingQuestion && question == null}
	<button onclick={resetQuestion}>Reload question</button>
{/if}
