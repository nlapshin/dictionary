import { MongoClient, Db } from 'mongodb';

import { generateDBConfig } from './config';
import dbOptions from './options';
import { DBCollections } from './collections';

import { IDBConfig } from './config/model';
import { IDB } from './model';

export class DB implements IDB {
  private config: IDBConfig;

  private client: MongoClient = null;
  private db: Db = null;

  public collections: DBCollections;

  constructor() {
    this.config = generateDBConfig(dbOptions);
  }

  async start(): Promise<MongoClient> {
    this.client = await MongoClient.connect(this.config.connectionUrl, this.config.connectionOptions);
    this.db = this.client.db();
    this.collections = new DBCollections(this.db);

    return this.client;
  }

  stop() {
    return this.client.close();
  }
}
