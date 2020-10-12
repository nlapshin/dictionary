import { FindOneOptions } from 'mongodb';
import { Language } from '@dclanguage/model';

import { IWordInstance, wordSection, wordSubSection } from '../../../instance/model';

export interface IDBWordStore {
  findOneByUniqParams(word: IDBWordUniqParams, options: FindOneOptions<IDBWordInstance>): Promise<IDBWordInstance>;
}

export interface IDBWordInstance extends IWordInstance {
  _id: string;
}

export type TDBWords = IDBWordInstance[];

export interface IDBWordUniqParams {
  [Language.rus]: string;
  [Language.eng]: string;
  section: wordSection;
  subsection: wordSubSection;
}
