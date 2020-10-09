import { FindOneOptions } from 'mongodb';

import { IWordInstance, wordSection, wordSubSection } from '../../../instance/model';

export interface IDBWordStore {
  findOneByUniqParams(word: IDBWordUniqParams, options: FindOneOptions<IDBWord>): Promise<IDBWord>;
}

export interface IDBWord extends IWordInstance {
  _id: string;
}

export type TDBWords = IDBWord[];

export interface IDBWordUniqParams {
  rus: string;
  eng: string;
  section: wordSection;
  subsection: wordSubSection;
}
