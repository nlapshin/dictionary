import { Collection, FindOneOptions } from 'mongodb';
import { Language, IWordInstance } from '@dcentities/model';

import { IDBWordStore, IDBWordUniqParams } from './model';

export class WordStore implements IDBWordStore {
  constructor(private collection: Collection) {}

  findOneByUniqParams(word: IDBWordUniqParams, options: FindOneOptions<IWordInstance> = {}): Promise<IWordInstance> {
    const query = {
      [Language.rus]: word.rus,
      [Language.eng]: word.eng,
      section: word.section,
      subsection: word.subsection
    };

    return this.collection.findOne(query, options);
  }
}
