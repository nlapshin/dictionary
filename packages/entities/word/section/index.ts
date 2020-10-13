import { IWordSection, wordSection, TWordSections, wordSubSection, TWordSubSections, wordSectionGroup } from './model';

export class WordSection implements IWordSection {
  findSubSections(section: wordSection | TWordSections): TWordSubSections {
    const sections = Array.isArray(section) ? section : [section as wordSection];

    return sections.reduce((res: wordSubSection[], sectionName: wordSection) => {
      const subSections = wordSectionGroup[sectionName];
      res = res.concat(subSections);

      return res;
    }, []);
  }
}
