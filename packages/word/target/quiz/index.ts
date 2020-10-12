import { filterSeries } from 'p-iteration';

import { QuizFactory } from '@dcquiz';
import { DBWord } from '../../database';

import { IDBWord, IDBWordInstance } from '../../database/model';

import { WordService } from '../../service';
import { IWordService } from '../../service/model';

import { WordQuizInstance } from './instance';

export class WordQuiz extends QuizFactory {
  private db: IDBWord;
  private service: IWordService;

  constructor() {
    super();

    this.db = new DBWord();
    this.service = new WordService();
  }

  selection() {
    console.log('run selection quiz!');
  }

  async exam() {
    await this.db.start();

    const query = await this.service.inquirer.exec();
    let words = await this.db.collection.aggregation.listFilter(query);

    while (true) {
      words = await this.test(words);

      if (words.length === 0) {
        break;
      }
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
