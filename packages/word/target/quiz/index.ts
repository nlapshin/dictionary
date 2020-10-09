import { QuizInstance } from './instance';
import { IQuiz, QuizType } from './model';

export class WordQuiz implements IQuiz {
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

    const instance = new QuizInstance({
      question: 'test?',
      answer: 'test'
    });

    await instance.test();
  }
}
