import { DBCollections } from './collections';

export * from './options/model';
export * from './config/model';
export * from './collections/model';

export interface IDB {
  collections: DBCollections;

  start(): void;
  stop(): void;
}
