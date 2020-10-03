import { Collection, FindOneOptions } from 'mongodb';

import { IWord } from '@dcdefinition';

export class WordStore {
  constructor(private collection: Collection) {}

  findByUniqParams(word: IWord, options: FindOneOptions<IWord>) {
    const query = {
      rus: word.rus,
      eng: word.eng,
      section: word.section,
      subsection: word.subsection
    };

    return this.collection.findOne(query, options);
  }
}
