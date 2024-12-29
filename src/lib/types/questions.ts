export interface Question {
	id: number;
	noun: string;
}

export interface QuestionAnswer {
	questionId: number;
	articleId: number;
}

export interface AnswerFeedback {
	feedback: string;
}
