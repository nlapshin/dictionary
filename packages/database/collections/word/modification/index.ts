import { Collection } from 'mongodb';

import { Word } from '@dcentities';
import { IWord, IWordInstance, IWordStats } from '@dcentities/model';

export class WordModification {
  private word: IWord;

  constructor(private collection: Collection) {
    this.word = new Word();
  }

  create(inst: IWordInstance) {
    const word = this.word.instance(inst);

    return this.collection.insertOne(word);
  }

  async increaseStats(query = {}, stats: IWordStats) {
    const word = await this.collection.findOne(query);

    const newStats = {
      failure: word.stats.failure + stats.failure,
      success: word.stats.success + stats.success,
      attempts: word.stats.attempts + stats.attempts
    };

    return this.collection.updateOne({ _id: word._id }, { $set: { 'stats': newStats } });
  }

  increaseSuccessStats(query = {}) {
    return this.increaseStats(query, { failure: 0, success: 1, attempts: 1 });
  }

  increaseFailureStats(query = {}) {
    return this.increaseStats(query, { failure: 1, success: 0, attempts: 1 });
  }

  async recalculateRate(query = {}) {
    const word = await this.collection.findOne(query, { projection: { stats: 1 } });
    const rate = this.word.rate.calculate(word.stats);

    return this.collection.updateOne({ _id: word._id }, { $set: { rate }});
  }
}
