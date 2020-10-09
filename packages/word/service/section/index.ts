import { wordSection, TWordSections, wordSubSection, TWordSubSections, wordSectionGroup } from '../../instance/model';
import { IWordServiceSection } from './model';

export class WordServiceSection implements IWordServiceSection {
  findSubSections(section: wordSection | TWordSections): TWordSubSections {
    const sections = Array.isArray(section) ? section : [section as wordSection];

    return sections.reduce((res: wordSubSection[], sectionName: wordSection) => {
      const subSections = wordSectionGroup[sectionName];
      res = res.concat(subSections);

      return res;
    }, []);
  }
}
