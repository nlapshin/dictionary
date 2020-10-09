import { IDB } from '@dcdatabase/model';

import { WordSection } from './section';
import { IWordSection } from './section/model';

import { WordType } from './type';
import { IWordType } from './type/model';

import { WordRate } from './rate';
import { IWordRate } from './rate/model';

import { WordInquirer } from './inquirer';

import { WordQuiz } from './quiz';
import { IWordQuiz } from './quiz/model';

import { WordInstance } from './instance';

import { IWord } from './model';

export class Word implements IWord {
  public section: IWordSection;
  public type: IWordType;
  public rate: IWordRate;
  public inquirer: WordInquirer;
  public quiz: IWordQuiz;
  public instance: WordInstance;

  constructor(private db: IDB) {
    this.section = new WordSection();
    this.type = new WordType();
    this.rate = new WordRate();
    this.inquirer = new WordInquirer();
    this.quiz = new WordQuiz(this.db, this.inquirer);
    this.instance = new WordInstance();
  }
}
