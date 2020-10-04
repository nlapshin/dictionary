import { FindOneOptions } from 'mongodb';

import { IWordInstance, wordSection, wordSubSection } from '@dcword/model';

export interface IDBWordStore {
	findOneByUniqParams(word: IDBWordUniqParams, options: FindOneOptions<IDBWord>): Promise<IDBWord>;
}

export interface IDBWord extends IWordInstance {
	_id: string;
}

export interface IDBWordUniqParams {
	rus: string;
	eng: string;
	section: wordSection;
	subsection: wordSubSection;
}
