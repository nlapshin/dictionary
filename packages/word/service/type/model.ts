import { TWordSections, wordType, TWordTypes } from '../../instance/model';

export interface IWordServiceType {
  list(): TWordTypes;
  findSections(type: wordType | TWordTypes): TWordSections;
}
