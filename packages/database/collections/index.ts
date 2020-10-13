import { Db } from 'mongodb';

import { DBWordCollection } from './word';
import { IDBWordCollection } from './word/model';

export class DBCollections {
  public word: IDBWordCollection;

  constructor(db: Db) {
    this.word = new DBWordCollection(db);
  }
}
