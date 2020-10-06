import { IWordSection } from './section/model';
import { IWordType } from './type/model';
import { IWordRate } from './rate/model';
import { WordInquirer } from './inquirer';
import { WordInstance } from './instance';

export * from './section/model';
export * from './type/model';
export * from './rate/model';
export * from './instance/model';

export interface IWord {
  section: IWordSection;
  type: IWordType;
  rate: IWordRate;
  inquirer: WordInquirer;
  instance: WordInstance;
}
