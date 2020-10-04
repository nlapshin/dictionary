import { Db, Collection } from 'mongodb';

import { WordStore } from './store';
import { WordAggregation } from './aggregation';
import { WordModification } from './modification';

export class WordCollection {
  private collection: Collection;

  public store: WordStore;
  public aggregation: WordAggregation;
  public modification: WordModification;

  constructor(private db: Db) {
    this.collection = this.db.collection('words');

    this.store = new WordStore(this.collection);
    this.aggregation = new WordAggregation(this.collection);
    this.modification = new WordModification(this.collection);
  }
}
