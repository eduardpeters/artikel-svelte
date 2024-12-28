import type { PageLoad } from './$types';

interface Question {
	id: number;
	noun: string;
}

export const load: PageLoad = async ({ fetch }): Promise<Question> => {
	const randomQuestionId = Math.floor(Math.random() * 3000);
	const response = await fetch(`/api/questions/${randomQuestionId}`);
	const data = await response.json();
	return data;
};
