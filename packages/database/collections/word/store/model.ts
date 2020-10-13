import { FindOneOptions } from 'mongodb';
import { Language, IWordInstance, wordSection, wordSubSection } from '@dcentities/model';

export interface IDBWordStore {
  findOneByUniqParams(word: IDBWordUniqParams, options: FindOneOptions<IWordInstance>): Promise<IWordInstance>;
}

export interface IDBWordUniqParams {
  [Language.rus]: string;
  [Language.eng]: string;
  section: wordSection;
  subsection: wordSubSection;
}
