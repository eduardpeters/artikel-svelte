import type { Question, QuestionAnswer, AnswerFeedback } from '$lib/types/questions';

type QuestionDto = Question;
interface QuestionAnswerDto {
	question_id: number;
	answer: number;
}
type AnswerFeedbackDto = AnswerFeedback;

class QuestionsService {
	static async getRandomQuestion(): Promise<Question> {
		const randomQuestionId = Math.floor(Math.random() * 3000);

		const response = await fetch(`/api/questions/${randomQuestionId}`);

		if (!response.ok) {
			throw new Error('Unable to retrieve question');
		}

		const data = (await response.json()) as QuestionDto;
		return data;
	}

	static async postQuestionAnswer(questionAnswer: QuestionAnswer): Promise<AnswerFeedback> {
		const data: QuestionAnswerDto = { question_id: questionAnswer.questionId, answer: questionAnswer.articleId };
		const response = await fetch('/api/answers', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error('Unable to review answer');
		}

		const answerFeedback = (await response.json()) as AnswerFeedbackDto;
		return answerFeedback;
	}
}

export default QuestionsService;
