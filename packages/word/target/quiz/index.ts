import { filterSeries } from 'p-iteration';

import { QuizFactory } from '@dcquiz';
import { DBWord } from '../../database';

import { IDBWord, IDBWordInstance } from '../../database/model';

import { WordService } from '../../service';
import { IWordService } from '../../service/model';

import { WordQuizInstance } from './instance';

import { WordQuizShow } from './show';
import { IWordQuizShow } from './show/model';

export class WordQuiz extends QuizFactory {
  private db: IDBWord;
  private service: IWordService;

  private show: IWordQuizShow;

  constructor() {
    super();

    this.db = new DBWord();
    this.service = new WordService();

    this.show = new WordQuizShow();
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

      if (failureWords.length === 0) {
        break;
      }

      words = failureWords;
    }

    await this.db.stop();
  }

  async test(words: IDBWordInstance[]): Promise<IDBWordInstance[]> {
    return filterSeries(words, async (word) => {
      const instance = new WordQuizInstance(word);
      const error = await instance.test();

      return error === true;
    });
  }
}
