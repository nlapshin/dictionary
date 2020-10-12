import { QuizInstance } from '@dcquiz';
import { Language } from '@dclanguage/model';

import { IWordInstance } from '../../../instance/model';

export class WordQuizInstance extends QuizInstance {
  constructor(word: IWordInstance, lang = Language.eng) {
    super({
      question: word[lang],
      answer: word[lang === Language.eng ? Language.rus : Language.eng],
    });
  }
}
