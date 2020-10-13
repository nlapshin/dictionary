import { filterSeries } from 'p-iteration';

import { Word, QuizFactory } from '@dcentities';
import { DB } from '@dcdatabase';

import { IWord, IWordInstance } from '@dcentities/model';
import { IDB } from '@dcdatabase/model';

import { QuizWordInstance } from './instance';

import { QuizWordShow } from './show';
import { IQuizWordShow } from './show/model';

import { QuizWordStats } from './stats';
import { IQuizWordStats } from './stats/model';

export class QuizWord extends QuizFactory {
  private db: IDB;
  private word: IWord;

  private show: IQuizWordShow;
  private stats: IQuizWordStats;

  constructor() {
    super();

    this.db = new DB();
    this.word = new Word();

    this.show = new QuizWordShow();
    this.stats = new QuizWordStats(this.db);
  }

  selection() {
    console.log('run selection quiz!');
  }

  async exam() {
    await this.db.start();

    const query = await this.word.inquirer.exec();
    let words = await this.db.collections.word.aggregation.listFilter(query);

    while (true) {
      const failureWords = await this.test(words);
      const successWords = this.word.difference(words, failureWords);

      this.show.result(successWords, failureWords, query.groupBy);
      await this.stats.increase(successWords, failureWords);

      if (failureWords.length === 0) {
        break;
      }

      words = failureWords;
    }

    await this.db.stop();
  }

  async test(words: IWordInstance[]): Promise<IWordInstance[]> {
    return filterSeries(words, async (word) => {
      const instance = new QuizWordInstance(word);
      const error = await instance.test();

      return error === true;
    });
  }
}
