import type { Question, QuestionAnswer, AnswerFeedback } from '$lib/types/questions';

type QuestionDto = Question;
interface QuestionAnswerDto {
	question_id: number;
	answer: number;
}
interface AnswerFeedbackDto {
	article_id: number;
	feedback: string;
}

class QuestionsService {
	static async getRandomQuestion(): Promise<Question> {
		const response = await fetch('/api/questions/random');

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

		return { articleId: answerFeedback.article_id, feedback: answerFeedback.feedback };
	}
}

export default QuestionsService;
