import { QuizInstance } from '@dcquiz';

import { IWordInstance } from '../../../instance/model';

export class WordQuizInstance extends QuizInstance {
  constructor(word: IWordInstance, lang = 'eng') {
    super({
      question: word[lang],
      answer: word[lang === 'eng' ? 'rus' : 'eng'],
    });
  }
}
