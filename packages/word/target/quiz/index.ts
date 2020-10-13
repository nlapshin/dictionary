import { filterSeries } from 'p-iteration';

import { QuizFactory } from '@dcquiz';
import { DBWord } from '../../database';

import { IWordInstance } from '../../instance/model';
import { IDBWord } from '../../database/model';

import { WordService } from '../../service';
import { IWordService } from '../../service/model';

import { WordQuizInstance } from './instance';

import { WordQuizShow } from './show';
import { IWordQuizShow } from './show/model';

import { WordQuizStats } from './stats';
import { IWordQuizStats } from './stats/model';

export class WordQuiz extends QuizFactory {
  private db: IDBWord;
  private service: IWordService;

  private show: IWordQuizShow;
  private stats: IWordQuizStats;

  constructor() {
    super();

    this.db = new DBWord();
    this.service = new WordService();

    this.show = new WordQuizShow();
    this.stats = new WordQuizStats(this.db);
  }

  selection() {
    console.log('run selection quiz!');
  }

  async exam() {
    await this.db.start();

    const query = await this.service.inquirer.exec();
    let words = await this.db.collection.aggregation.listFilter(query);

    while (true) {
      const failureWords = await this.test(words);
      const successWords = this.service.mapping.difference(words, failureWords);

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
      const instance = new WordQuizInstance(word);
      const error = await instance.test();

      return error === true;
    });
  }
}
