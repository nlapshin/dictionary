import { WordType } from './type';
import { WordSection, WordSubSection } from './section';

export * from './type';
export * from './section';
export * from './status';
export * from './group';

export interface IWord {
	id?: number;
	rus: string;
	eng: string;
	type: WordType;
	section?: WordSection;
	subsection?: WordSubSection;
	transcription?: string;
	examples?: string[];
	rate?: number;
	stats?: WordStats;
}

export type IWords = IWord[];

export type WordStats = {
	failure: number;
	success: number;
	attempts: number;
};
