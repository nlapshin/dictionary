import { QuizType } from '../type/model';
import { IQuizFactory } from './model';

export class QuizFactory implements IQuizFactory {
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
    throw new Error('selection method should be implemented');
  }

  exam() {
    throw new Error('exam method should be implemented');
  }
}
