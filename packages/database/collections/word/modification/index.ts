import { Collection } from 'mongodb';

import { Word } from '@dcword';
import { IWord, IWordInstance, IWordInstanceStats } from '@dcword/model';

export class WordModification {
	private word: IWord;

	constructor(private collection: Collection) {
		this.word = new Word();
	}

	create(inst: IWordInstance) {
		const word = this.word.instance.generate(inst);

		return this.collection.insertOne(word);
	}

	async increaseStats(query = {}, stats: IWordInstanceStats) {
		const word = await this.collection.findOne(query);

		const newStats = {
			failure: word.stats.failure + stats.failure,
			success: word.stats.success + stats.success,
			attempts: word.stats.attempts + stats.attempts
		};

		return this.collection.updateOne({ _id: word._id }, { $set: { 'stats': newStats } });
	}

	async recalculateRate(query = {}) {
		const word = await this.collection.findOne(query, { projection: { stats: 1 } });
		const rate = this.word.rate.calculate(word.stats);

		return this.collection.updateOne({ _id: word._id }, { $set: { rate }});
	}
}
