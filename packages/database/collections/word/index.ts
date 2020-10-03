import { Db, Collection } from 'mongodb';

import { WordStore } from './store';
import { WordModification } from './modification';

export class WordCollection {
  private collection: Collection;

  public store: WordStore;
  public modification: WordModification;

  constructor(private db: Db) {
    this.collection = this.db.collection('words');

    this.store = new WordStore(this.collection);
    this.modification = new WordModification(this.collection);
  }
}
