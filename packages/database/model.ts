export * from './options/model';
export * from './config/model';
import { IDBCollections } from './collections/model';

export interface IDB {
  collections: IDBCollections;

  start(): void;
  stop(): void;
}
