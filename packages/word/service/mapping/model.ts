import { IWordInstance } from '../../instance/model';

export interface IWordServiceMapping {
  difference(words: IWordInstance[], cutWords: IWordInstance[]): IWordInstance[];
}
