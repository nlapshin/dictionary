import { forEach } from 'p-iteration';

import { DBWord } from '../';
import { words } from './sample';

import { IDBTest } from './model';

export class DBWordTest extends DBWord implements IDBTest {
  constructor() {
    super({ host: 'localhost', db: 'dictionary-test', auth: { enabled: false } });
  }

  async init() {
    await this.start();

    await forEach(words, word => {
      return this.collection.modification.create(word);
    });

    await this.stop();
  }
}
