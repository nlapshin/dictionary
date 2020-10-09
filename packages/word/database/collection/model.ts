import { Collection } from 'mongodb';
import { WordAggregation } from './aggregation';
import { WordModification } from './modification';

import { IDBWordStore } from './store/model';


export * from './store/model';
export * from './aggregation/model';

export interface IWordCollection {
  collection: Collection;

  store: IDBWordStore;
  aggregation: WordAggregation;
  modification: WordModification;
}
