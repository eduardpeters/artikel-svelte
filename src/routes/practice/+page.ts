import { PUBLIC_API_BASE_URL } from '$env/static/public';
import type { Articles, Word } from '$lib/types/words';

export async function load({ fetch }): Promise<{ words: Word[]; articles: Articles[] }> {
	const questionsRequestUrl = `${PUBLIC_API_BASE_URL}questions`;
	const articlesRequestUrl = `${PUBLIC_API_BASE_URL}articles`;
	const res = await Promise.all([fetch(questionsRequestUrl), fetch(articlesRequestUrl)]);
	const [words, articles] = await Promise.all([res[0].json(), res[1].json()]);
	return { words, articles };
}
