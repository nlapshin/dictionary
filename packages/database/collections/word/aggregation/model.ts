import { IWord, IWords, WordSection, WordSubSection, WordStatus } from '@dcdefinition';

export interface IWordFilter {
  sections?: WordSection[];
  subsections?: WordSubSection[];
  status?: WordStatus;
  words?: IWord[];
}

export interface IWordsGroup {
  [s: string]: IWords
}

export interface IWordsSectionGroup {
  [s: string]: {
    [s: string]: IWords
  }
}

