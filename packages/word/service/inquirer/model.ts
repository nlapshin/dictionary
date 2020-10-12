import { Language } from '@dclanguage/model';

import { TWordTypes, TWordSections, TWordSubSections, wordStatus } from '../../instance/model';

export interface IWordInquirerQuestion {
  groupBy: Language;
  types: TWordTypes;
  sections: TWordSections;
  subSection: TWordSubSections;
  status: wordStatus;
}
