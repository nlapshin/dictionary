import { wordSection, wordSubSection, wordStatus } from '@dcword/model';
import { IDBWord } from '../store/model';

export interface IDBWordFilter {
	sections?: wordSection[];
	subsections?: wordSubSection[];
	status?: wordStatus;
	words?: IDBWord[];
}

export interface IDBWordsGroup {
	[s: string]: IDBWord[];
}

export interface IDBWordsSectionGroup {
	[s: string]: {
		[s: string]: IDBWord[];
	};
}

