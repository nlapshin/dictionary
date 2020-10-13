import { TWordSections, TWordSubSections, wordStatus } from '../../../instance/model';
import { IDBWordInstance } from '../store/model';

export interface IDBWordFilter {
  sections?: TWordSections;
  subsections?: TWordSubSections;
  status?: wordStatus;
  words?: IDBWordInstance[];
}

export interface IDBWordsGroup {
  [s: string]: IDBWordInstance[];
}

export interface IDBWordsSectionGroup {
  [s: string]: {
    [s: string]: IDBWordInstance[];
  };
}

