import { wordSection, TWordSections, TWordSubSections } from '../../instance/model';

export interface IWordServiceSection {
  findSubSections(section: wordSection | TWordSections): TWordSubSections;
}
