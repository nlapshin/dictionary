// import { QuizInstance } from '@dcquiz';
import { IDB } from '@dcdatabase/model';

import { QuizType } from '@dcquiz/model';
import { IWordQuiz } from './model';

export class WordQuiz implements IWordQuiz {
  constructor(private db: IDB, private inquirer: IWordInquirer) {}

  make(type: QuizType) {
    if (type === QuizType.exam) {
      return this.exam();
    }

    if (type === QuizType.selection) {
      return this.selection();
    }

    throw new Error(`quiz type ${type} not supported`);
  }

  selection() {
    console.log('run selection quiz!');
  }

  async exam() {
    console.log('run exam quiz!');

    const options = await this.inquirer.exec();

    console.log(options, this.db);

    // inquirer

    // const instance = new QuizInstance({
    //   question: 'test?',
    //   answer: 'test'
    // });

    // await instance.test();
  }
}
