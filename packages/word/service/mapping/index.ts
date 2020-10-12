import { WordInstance } from '../../instance';
import { IWordInstance } from '../../instance/model';

import { IWordServiceMapping } from './model';

export class WordServiceMapping implements IWordServiceMapping {
  private instance: WordInstance;

  constructor() {
    this.instance = new WordInstance();
  }

  difference(words: IWordInstance[], cutWords: IWordInstance[]): IWordInstance[] {
    return words.filter(word => cutWords.every(compareWord => this.instance.compare(word, compareWord) === false));
  }
}
