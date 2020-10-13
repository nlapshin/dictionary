import { QuizType } from '../type/model';

export interface IQuizFactory {
  make(type: QuizType);
  selection();
  exam();
}


