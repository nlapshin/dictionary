import { Language } from '../../language/model';

import { TWordTypes } from '../type/model';
import { TWordSections, TWordSubSections } from '../section/model';
import { wordStatus } from '../status/model';

export interface IWordInquirer {
  exec(): Promise<IWordInquirerQuestion>;
}

export interface IWordInquirerQuestion {
  groupBy: Language;
  types: TWordTypes;
  sections: TWordSections;
  subSection: TWordSubSections;
  status: wordStatus;
}
