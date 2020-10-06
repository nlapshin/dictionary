import { IQuiz, QuizType } from './model';

import { QuizQuestionnaire } from './questionnare';

export class Quiz implements IQuiz {
  private questionnaire: QuizQuestionnaire;

  constructor() {
    this.questionnaire = new QuizQuestionnaire();
  }

  make(type: QuizType) {
    if (type === QuizType.exam) {
      return this.exam();
    }

    if (type === QuizType.selection) {
      return this.selection();
    }

    throw new Error(`quiz type ${type} not supported`);
  }

  selection() {
    console.log('run selection quiz!');
  }

  async exam() {
    const options = await this.questionnaire.exam();

    // {
    //   groupBy: 'eng',
    //   types: [ 'verb' ],
    //   sections: [ 'stage' ],
    //   subsections: [ 'beginning' ],
    //   status: 'whole'
    // }

    console.log(options);

    console.log('run exam quiz!');
  }
}
