import { IWords, WordSection, WordSubSection, WordStatus } from '@dcdefinition';
import { IDBWord } from '../store/model';

export interface IWordFilter {
	sections?: WordSection[];
	subsections?: WordSubSection[];
	status?: WordStatus;
	words?: IDBWord[];
}

export interface IWordsGroup {
	[s: string]: IWords;
}

export interface IWordsSectionGroup {
	[s: string]: {
		[s: string]: IWords
	};
}

