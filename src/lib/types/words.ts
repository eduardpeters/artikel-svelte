export enum Articles {
	DER = 'DER',
	DIE = 'DIE',
	DAS = 'DAS'
}

export type Choice = {
	id: number;
	name: Articles;
};

export type Word = {
	id: string;
	text: string;
	article: Choice;
};
