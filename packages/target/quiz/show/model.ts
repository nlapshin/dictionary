import { Language, IWordInstance } from '@dcentities/model';

export interface IQuizWordShow {
  result(successWords: IWordInstance[], failureWords: IWordInstance[], lang: Language): void;
}
