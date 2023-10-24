import { Articles } from '$lib/types/words';
import type { Word } from '$lib/types/words';

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
