import { Language } from '@dclanguage/model';

import { IWordInstance } from '../../../instance/model';

export interface IWordQuizShow {
  result(successWords: IWordInstance[], failureWords: IWordInstance[], lang: Language): void;
}
