import { IWordServiceSection } from './section/model';
import { IWordServiceType } from './type/model';
import { IWordServiceRate } from './rate/model';

import { WordServiceInquirer } from './inquirer';
import { IWordServiceMapping } from './mapping/model';

export interface IWordService {
  section: IWordServiceSection;
  type: IWordServiceType;
  rate: IWordServiceRate;

  inquirer: WordServiceInquirer;
  mapping: IWordServiceMapping;
}
