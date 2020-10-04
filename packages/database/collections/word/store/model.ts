import { FindOneOptions } from 'mongodb';

import { IWord } from '@dcdefinition';
import { WordSection, WordSubSection } from '@dcdefinition';

export interface IDBWordStore {
	findOneByUniqParams(word: IDBWordUniqParams, options: FindOneOptions<IWord>): Promise<IDBWord>;
}

export interface IDBWord extends IWord {
	_id: string;
}

export interface IDBWordUniqParams {
	rus: string;
	eng: string;
	section: WordSection;
	subsection: WordSubSection;
}
