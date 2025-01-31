import type { Noun } from '$lib/types/nouns';

type NounDto = Noun;

class NounsService {
	static baseUrl = import.meta.env.VITE_API_BASE_URL;

	static async getRandomNoun(): Promise<Noun> {
		const response = await fetch(`${this.baseUrl}nouns/random`);

		if (!response.ok) {
			throw new Error('Unable to retrieve noun');
		}

		const data = (await response.json()) as NounDto;
		return data;
	}
}

export default NounsService;
