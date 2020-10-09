import { DB } from '@dcdatabase';

import { WordCollection } from './collection';
import { IWordCollection } from './collection/model';

import { IDBWord } from './model';

export class DBWord extends DB implements IDBWord {
  public collection: IWordCollection = null;

  async start() {
    const client = await super.start();

    this.collection = new WordCollection(this.db);

    return client;
  }
}
