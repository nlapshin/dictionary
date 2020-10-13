import { IWordInstance } from '../../../instance/model';

export interface IWordQuizStats {
  increase(successWords: IWordInstance[], failureWords: IWordInstance[]);
}
