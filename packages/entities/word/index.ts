import { uuid } from '@dclib';

import { Language } from '../language/model';

import { IWordInstance } from './instance/model';

import { WordType } from './type';
import { IWordType } from './type/model';

import { WordSection } from './section';
import { IWordSection } from './section/model';

import { WordRate } from './rate';
import { IWordRate } from './rate/model';

import { WordInquirer } from './inquirer';
import { IWordInquirer } from './inquirer/model';

export class Word {
  public type: IWordType;
  public section: IWordSection;
  public rate: IWordRate;
  public inquirer: IWordInquirer;

  constructor() {
    this.type = new WordType();
    this.section = new WordSection();
    this.rate = new WordRate();
    this.inquirer = new WordInquirer(this.type, this.section);
  }

  instance(inst: IWordInstance): IWordInstance {
    const defaultWord = {
      _id: inst._id || uuid(),
      rate: 100500,
      stats: { failure: 0, success: 0, attempts: 0 }
    };

    return { ...defaultWord, ...inst };
  }

  compare(word: IWordInstance, compareWord: IWordInstance): boolean {
    if (word._id && compareWord._id) {
      return word._id === compareWord._id;
    }

    return word[Language.rus] === compareWord[Language.rus] &&
      word[Language.eng] === compareWord[Language.eng] &&
      word.section === compareWord.section &&
      word.subsection === compareWord.subsection;
  }

  difference(words: IWordInstance[], cutWords: IWordInstance[]): IWordInstance[] {
    return words.filter(word => cutWords.every(compareWord => this.compare(word, compareWord) === false));
  }
}
