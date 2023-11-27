import { PUBLIC_API_BASE_URL } from '$env/static/public';
import type { Word } from '$lib/types/words';

export async function load({ fetch }): Promise<{ words: Word[] }> {
	const requestUrl = `${PUBLIC_API_BASE_URL}questions`;
	const res = await fetch(requestUrl);
	const words = await res.json();
	return { words };
}
