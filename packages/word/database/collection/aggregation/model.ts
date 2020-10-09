import { TWordSections, TWordSubSections, wordStatus } from '../../../instance/model';
import { TDBWords } from '../store/model';

export interface IDBWordFilter {
  sections?: TWordSections;
  subsections?: TWordSubSections;
  status?: wordStatus;
  words?: TDBWords;
}

export interface IDBWordsGroup {
  [s: string]: TDBWords;
}

export interface IDBWordsSectionGroup {
  [s: string]: {
    [s: string]: TDBWords;
  };
}

