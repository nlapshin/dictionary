import { QuizInstance } from '@dcentities';
import { Language, IWordInstance } from '@dcentities/model';

export class QuizWordInstance extends QuizInstance {
  constructor(word: IWordInstance, lang = Language.eng) {
    super({
      question: word[lang],
      answer: word[lang === Language.eng ? Language.rus : Language.eng],
    });
  }
}
