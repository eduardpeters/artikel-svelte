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

export const words: Word[] = [
	{
		text: 'Auto',
		article: Articles.DAS,
		choices: [Articles.DER, Articles.DIE, Articles.DAS]
	},
	{
		text: 'Lampe',
		article: Articles.DIE,
		choices: [Articles.DER, Articles.DIE, Articles.DAS]
	},
	{
		text: 'Regen',
		article: Articles.DER,
		choices: [Articles.DER, Articles.DIE, Articles.DAS]
	}
];
