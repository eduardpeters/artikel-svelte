<script lang="ts">
	import { onMount } from 'svelte';
	import { articles } from '$lib/constants/articles';
	import QuestionsService from '$lib/services/QuestionsService';
	import LoadingIndicator from './LoadingIndicator.svelte';
	import type { Article } from '$lib/types/articles';
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

{#snippet articleButton(article: Article)}
	<button
		class={`article-button article-button--${article.article}`}
		disabled={loadingFeedback}
		onclick={() => answerQuestion(question!.id, article.id)}
	>
		{article.article}
	</button>
{/snippet}

<main>
	<h1>Let's practice</h1>
	<p>What is the article for <em>{question ? question.noun : '...'}</em>?</p>
	{#if loadingQuestion}
		<LoadingIndicator />
	{:else if !loadingQuestion && question}
		<div class="article-buttons__container">
			{#each articles as article}
				{@render articleButton(article)}
			{/each}
		</div>
	{/if}
	{#if feedback === null && loadingFeedback}
		<div class="loading-feedback__container">
			<span> Checking answer... </span>
			<LoadingIndicator />
		</div>
	{:else if !loadingFeedback && feedback}
		<div>Result: {feedback}</div>
		<button onclick={resetQuestion}>Play again</button>
	{/if}
	{#if !loadingQuestion && question == null}
		<button onclick={resetQuestion}>Reload question</button>
	{/if}
</main>

<style>
	main,
	.loading-feedback__container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	p {
		margin: 0;
	}

	.article-buttons__container {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 2rem;
	}

	.article-button {
		all: unset;
		background-color: var(--color-accent-dark);
		cursor: pointer;
		padding: 1rem 2rem;
		border-radius: 2rem;
		text-align: center;
		font-size: 1.1rem;
	}

	.article-button:hover {
		outline: 2px solid var(--color-accent);
		transform: scale(1.1);
	}

	.article-button--Der {
		background-color: var(--color-der);
	}
	.article-button--Die {
		background-color: var(--color-die);
	}
	.article-button--Das {
		background-color: var(--color-das);
	}
	@media screen and (max-width: 400px) {
		.article-buttons__container {
			flex-direction: column;
			gap: 1rem;
		}
	}
</style>
