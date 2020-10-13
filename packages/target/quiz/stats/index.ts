
import { forEachSeries } from 'p-iteration';

import { IDB } from '@dcdatabase/model';
import { IWordInstance } from '@dcentities/model';

import { IQuizWordStats } from './model';

export class QuizWordStats implements IQuizWordStats {
  constructor(private db: IDB) {}

  async increase(successWords: IWordInstance[], failureWords: IWordInstance[]) {
    await forEachSeries(successWords, async (word) => {
      await this.db.collections.word.modification.increaseSuccessStats({ _id: word._id });
    });

    await forEachSeries(failureWords, async (word) => {
      await this.db.collections.word.modification.increaseFailureStats({ _id: word._id });
    });
  }
}
