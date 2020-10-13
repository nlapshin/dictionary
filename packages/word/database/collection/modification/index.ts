import { Collection } from 'mongodb';

import { WordInstance } from '../../../instance';
import { IWordInstance, IWordStats } from '../../../instance/model';

import { WordService } from '../../../service';
import { IWordService } from '../../../service/model';

export class WordModification {
  private instance: WordInstance;
  private service: IWordService;

  constructor(private collection: Collection) {
    this.instance = new WordInstance();
    this.service = new WordService();
  }

  create(inst: IWordInstance) {
    const word = this.instance.generate(inst);

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
    const rate = this.service.rate.calculate(word.stats);

    return this.collection.updateOne({ _id: word._id }, { $set: { rate }});
  }
}
