import * as chalk from 'chalk';

import { Language, IWordInstance } from '@dcentities/model';
import { IQuizWordShow } from './model';

import { QuizWordInstance } from '../instance';

export class QuizWordShow implements IQuizWordShow {
  result(successWords: IWordInstance[], failureWords: IWordInstance[], lang = Language.eng): void {
    const counts = {
      all: (successWords.length + failureWords.length),
      success: successWords.length,
      failure: failureWords.length
    };

    console.log(`Success: ${chalk.green(counts.success)}. Failure: ${chalk.red(counts.failure)}`);

    failureWords.forEach((word) => {
      const instance = new QuizWordInstance(word, lang);

      instance.show();
    });
  }
}
