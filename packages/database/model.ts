export * from './options/model';
export * from './config/model';

export interface IDB {
  start(): void;
  stop(): void;
}
