import { wordType } from '../type/model';
import { wordSection, wordSubSection } from '../section/model';

export interface IWordInstance {
	id?: number;
	rus: string;
	eng: string;
	type: wordType;
	section?: wordSection;
	subsection?: wordSubSection;
	transcription?: string;
	examples?: string[];
	rate?: number;
	stats?: IWordInstanceStats;
}

export type IWords = IWordInstance[];

export interface IWordInstanceStats {
	failure: number;
	success: number;
	attempts: number;
}
