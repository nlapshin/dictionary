import { IWordInquirer } from './inquirer/model';
import { IWordInstance } from './instance/model';
import { IWordType } from './type/model';
import { IWordSection } from './section/model';
import { IWordRate } from './rate/model';

export * from './inquirer/model';
export * from './instance/model';
export * from './type/model';
export * from './rate/model';
export * from './section/model';
export * from './stats/model';
export * from './status/model';

export interface IWord {
  type: IWordType;
  section: IWordSection;
  rate: IWordRate;
  inquirer: IWordInquirer;
  instance(inst: IWordInstance): IWordInstance;
  compare(word: IWordInstance, compareWord: IWordInstance): boolean;
  difference(words: IWordInstance[], cutWords: IWordInstance[]): IWordInstance[];
}
