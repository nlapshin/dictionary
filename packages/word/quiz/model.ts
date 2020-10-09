import { QuizType } from '@dcquiz/model';

export interface IWordQuiz {
  make(type: QuizType);
  selection();
  exam();
}
