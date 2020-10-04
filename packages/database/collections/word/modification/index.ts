import { Collection } from 'mongodb';

import { IWord, WordStats } from '@dcdefinition';
import { generateWord, calculateRate } from '../instance';

export class WordModification {
	constructor(private collection: Collection) {}

	create(inst: IWord) {
		const word = generateWord(inst);

		return this.collection.insertOne(word);
	}

	async increaseStats(query = {}, stats: WordStats) {
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
		const rate = calculateRate(word.stats);

		return this.collection.updateOne({ _id: word._id }, { $set: { rate }});
	}
}
