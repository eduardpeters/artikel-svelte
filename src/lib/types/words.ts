export enum Articles {
	DER = 'DER',
	DIE = 'DIE',
	DAS = 'DAS'
}

export type Word = {
	text: string;
	article: Articles;
	choices: Articles[];
};
