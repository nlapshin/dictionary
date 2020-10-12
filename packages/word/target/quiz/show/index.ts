import * as chalk from 'chalk';

import { Language } from '@dclanguage/model';

import { WordQuizInstance } from '../instance';

import { IWordInstance } from '../../../instance/model';
import { IWordQuizShow } from './model';

export class WordQuizShow implements IWordQuizShow {
  result(successWords: IWordInstance[], failureWords: IWordInstance[], lang = Language.eng): void {
    const counts = {
      all: (successWords.length + failureWords.length),
      success: successWords.length,
      failure: failureWords.length
    };

    console.log(`Success: ${chalk.green(counts.success)}. Failure: ${chalk.red(counts.failure)}`);

    failureWords.forEach((word) => {
      const instance = new WordQuizInstance(word, lang);

      instance.show();
    });
  }
}
