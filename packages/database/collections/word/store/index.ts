import { Collection, FindOneOptions } from 'mongodb';

import { IDBWordStore, IDBWord, IDBWordUniqParams } from './model';
export class WordStore implements IDBWordStore {
  constructor(private collection: Collection) {}

  findOneByUniqParams(word: IDBWordUniqParams, options: FindOneOptions<IDBWord> = {}): Promise<IDBWord> {
    const query = {
      rus: word.rus,
      eng: word.eng,
      section: word.section,
      subsection: word.subsection
    };

    return this.collection.findOne(query, options);
  }
}
