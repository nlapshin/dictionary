import { IWordInstance } from '@dcentities/model';

export interface IQuizWordStats {
  increase(successWords: IWordInstance[], failureWords: IWordInstance[]);
}
