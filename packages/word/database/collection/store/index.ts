import { Collection, FindOneOptions } from 'mongodb';

import { Language } from '@dclanguage/model';

import { IDBWordStore, IDBWordInstance, IDBWordUniqParams } from './model';

export class WordStore implements IDBWordStore {
  constructor(private collection: Collection) {}

  findOneByUniqParams(word: IDBWordUniqParams, options: FindOneOptions<IDBWordInstance> = {}): Promise<IDBWordInstance> {
    const query = {
      [Language.rus]: word.rus,
      [Language.eng]: word.eng,
      section: word.section,
      subsection: word.subsection
    };

    return this.collection.findOne(query, options);
  }
}
