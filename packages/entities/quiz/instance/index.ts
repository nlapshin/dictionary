import * as inquirer from 'inquirer';

import { matchString } from '@dclib';

import { IQuizInstanceValue, IQuizInstanceInquirer } from './model';

export class QuizInstance {
  private _value: IQuizInstanceValue;

  constructor(inst: IQuizInstanceValue) {
    const defaultQuestion = {
      stats: { failure: 0, success: 0, attempts: 0 }
    };

    this._value = { ...defaultQuestion, ...inst };
  }

  get question(): string {
    return this._value.question;
  }

  get answer(): string {
    return this._value.answer;
  }

  get value(): IQuizInstanceValue {
    return this._value;
  }

  get inquirer(): IQuizInstanceInquirer {
    return {
      type: 'input',
      name: this._value.question,
      message: `${this._value.question}?`
    };
  }

  async test(): Promise<boolean> {
    const answers = await inquirer.prompt(this.inquirer);
    const answer = answers[this.inquirer.name];

    const [ error, correct ] = matchString(answer, this.answer);

    if (error) {
      console.log(correct);
    }

    return error;
  }

  show() {
    console.log(`${this.question} - ${this.answer}`);
  }
}
