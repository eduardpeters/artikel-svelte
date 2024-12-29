import type { PageLoad } from './$types';
import QuestionsService from '$lib/services/QuestionsService';

export const load: PageLoad = async () => {
	await new Promise((resolve) => setTimeout(resolve, 5000));
	const data = await QuestionsService.getRandomQuestion();
	return data;
};
