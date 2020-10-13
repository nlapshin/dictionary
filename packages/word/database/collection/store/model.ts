import { FindOneOptions } from 'mongodb';
import { Language } from '@dclanguage/model';

import { IWordInstance, wordSection, wordSubSection } from '../../../instance/model';

export interface IDBWordStore {
  findOneByUniqParams(word: IDBWordUniqParams, options: FindOneOptions<IWordInstance>): Promise<IWordInstance>;
}

export interface IDBWordInstance extends IWordInstance {
  _id?: string;
}

export interface IDBWordUniqParams {
  [Language.rus]: string;
  [Language.eng]: string;
  section: wordSection;
  subsection: wordSubSection;
}
