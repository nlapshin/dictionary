import { forEachSeries } from 'p-iteration';

import { QuizFactory } from '@dcquiz';

import { WordQuizInstance } from './instance';

import { DBWord } from '../../database';
import { IDBWord } from '../../database/model';

import { WordService } from '../../service';
import { IWordService } from '../../service/model';

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
    const words = await this.db.collection.aggregation.listFilter(query, {});

    await forEachSeries(words, async (word) => {
      const instance = new WordQuizInstance(word);

      await instance.test();
    });

    await this.db.stop();
  }
}
