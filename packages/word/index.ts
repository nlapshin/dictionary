import { WordSection } from './section';
import { IWordSection } from './section/model';

import { WordType } from './type';
import { IWordType } from './type/model';

import { WordRate } from './rate';
import { IWordRate } from './rate/model';

import { WordInquirer } from './inquirer';

import { WordInstance } from './instance';

import { IWord } from './model';

export class Word implements IWord {
  public section: IWordSection;
  public type: IWordType;
  public rate: IWordRate;
  public inquirer: WordInquirer;
  public instance: WordInstance;

  constructor() {
    this.section = new WordSection();
    this.type = new WordType();
    this.rate = new WordRate();
    this.inquirer = new WordInquirer();
    this.instance = new WordInstance();
  }
}
