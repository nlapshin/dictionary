import { IWordInstance } from './model';

export class WordInstance {
  generate(inst: IWordInstance): IWordInstance {
    const defaultWord = {
      rate: 100500,
      stats: { failure: 0, success: 0, attempts: 0 }
    };

    return { ...defaultWord, ...inst };
  }
}
