import { MongoClient, Db } from 'mongodb';
import { merge } from 'lodash';

import { generateDBConfig } from './config';
import dbDefaultOptions from './options';
import { DBCollections } from './collections';

import { IDBConfig } from './config/model';
import { IDBOptions } from './options/model';
import { IDBCollections } from './collections/model';
import { IDB } from './model';

export class DB implements IDB {
  protected config: IDBConfig;

  protected client: MongoClient = null;
  protected db: Db = null;

  public collections: IDBCollections = null;

  constructor(options: IDBOptions = {}) {
    this.config = generateDBConfig(merge({}, dbDefaultOptions, options));
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
