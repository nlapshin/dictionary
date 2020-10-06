import * as inquirer from 'inquirer';

import { Word } from '@dcword';
import { IWord } from '@dcword/model';

export class QuizInquirer {
  private word: IWord;

  constructor() {
    this.word = new Word();
  }

  get list() {
    return [
      {
        type: 'list',
        name: 'groupBy',
        message: 'lang',
        choices: [ 'eng', 'rus' ]
      },
      ...this.word.inquirer.list,
    ];
  }

  exec() {
    return inquirer.prompt(this.list);
  }
}
