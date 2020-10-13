
import { forEachSeries } from 'p-iteration';

import { IDBWord, IDBWordInstance } from '../../../database/model';
import { IWordQuizStats } from './model';

export class WordQuizStats implements IWordQuizStats {
  constructor(private db: IDBWord) {}

  async increase(successWords: IDBWordInstance[], failureWords: IDBWordInstance[]) {
    await forEachSeries(successWords, async (word) => {
      await this.db.collection.modification.increaseSuccessStats({ _id: word._id });
    });

    await forEachSeries(failureWords, async (word) => {
      await this.db.collection.modification.increaseFailureStats({ _id: word._id });
    });
  }
}
