export interface Noun {
	id: number;
	noun: string;
	article: 'Der' | 'Die' | 'Das';
	is_plural: boolean;
}
