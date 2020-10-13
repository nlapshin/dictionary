import { Language } from '../../language/model';

import { wordType } from '../type/model';
import { wordSection, wordSubSection } from '../section/model';
import { IWordStats } from '../stats/model';

export interface IWordInstance {
  _id?: string;
  [Language.rus]: string;
  [Language.eng]: string;
  type: wordType;
  section?: wordSection;
  subsection?: wordSubSection;
  transcription?: string;
  examples?: string[];
  rate?: number;
  stats?: IWordStats;
}
