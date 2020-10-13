import { Language } from '@dclanguage/model';

import { wordType } from './type/model';
import { wordSection, wordSubSection } from './section/model';
import { IWordStats } from './stats/model';

export * from './type/model';
export * from './section/model';
export * from './stats/model';
export * from './status/model';

export interface IWordInstance {
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

export type IWords = IWordInstance[];
