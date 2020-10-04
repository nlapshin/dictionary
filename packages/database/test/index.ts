import { forEach } from 'p-iteration';

import { DB } from '../';
import { words } from './sample';

import { IDBTest } from './model';

export class DBTest extends DB implements IDBTest {
	constructor() {
		super({ host: 'localhost', db: 'dictionary-test', auth: { enabled: false } });
	}

	get dbName() {
		return ;
	}

	async init() {
		await this.start();

		await forEach(words, word => {
			return this.collections.word.modification.create(word);
		});

		await this.stop();
	}
}
