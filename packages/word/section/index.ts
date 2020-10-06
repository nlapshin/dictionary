import { IWordSection, wordSection, wordSubSection, wordSectionGroup } from './model';

export class WordSection implements IWordSection {
  findSubSections(section: wordSection | wordSection[]): wordSubSection[] {
    const sections = Array.isArray(section) ? section : [section as wordSection];

    return sections.reduce((res: wordSubSection[], sectionName: wordSection) => {
      const subSections = wordSectionGroup[sectionName];
      res = res.concat(subSections);

      return res;
    }, []);
  }
}
