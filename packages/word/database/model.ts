export * from './collection/model';

import { IDB } from '@dcdatabase/model';
import { IWordCollection } from './collection/model';

export interface IDBWord extends IDB {
  collection: IWordCollection;
}
