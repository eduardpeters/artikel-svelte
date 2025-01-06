export interface Question {
	id: number;
	noun: string;
}

export interface QuestionAnswer {
	questionId: number;
	articleId: number;
}

export enum FeedbackResult {
	OK = 'OK',
	KO = 'KO',
}

export interface AnswerFeedback {
	articleId: number;
	feedback: FeedbackResult;
}
