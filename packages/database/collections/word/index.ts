import { Db, Collection } from 'mongodb';

import { WordStore } from './store';
import { WordAggregation } from './aggregation';
import { WordModification } from './modification';

import { IDBWordStore } from './store/model';

import { IDBWordCollection } from './model';

export class DBWordCollection implements IDBWordCollection {
  public collection: Collection;

  public store: IDBWordStore;
  public aggregation: WordAggregation;
  public modification: WordModification;

  constructor(private db: Db) {
    this.collection = this.db.collection('words');

    this.store = new WordStore(this.collection);
    this.aggregation = new WordAggregation(this.collection);
    this.modification = new WordModification(this.collection);
  }
}
