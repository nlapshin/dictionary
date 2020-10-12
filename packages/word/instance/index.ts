import { Language } from '@dclanguage/model';
import { IWordInstance } from './model';

export class WordInstance {
  generate(inst: IWordInstance): IWordInstance {
    const defaultWord = {
      rate: 100500,
      stats: { failure: 0, success: 0, attempts: 0 }
    };

    return { ...defaultWord, ...inst };
  }

  compare(word: IWordInstance, compareWord: IWordInstance): boolean {
    return word[Language.rus] === compareWord[Language.rus] &&
      word[Language.eng] === compareWord[Language.eng] &&
      word.section === compareWord.section &&
      word.subsection === compareWord.subsection;
  }
}
