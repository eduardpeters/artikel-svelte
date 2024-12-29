import type { PageLoad } from './$types';
import QuestionsService from '$lib/services/QuestionsService';

export const load: PageLoad = async () => {
	const data = await QuestionsService.getRandomQuestion();
	return data;
};
