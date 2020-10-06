import { Db } from 'mongodb';

import { WordCollection } from './word';

export class DBCollections {
  public word: WordCollection;

  constructor(private db: Db) {
    this.word = new WordCollection(this.db);
  }
}
