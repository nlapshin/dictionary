import { wordSection, TWordSections } from '../section/model';
import { IWordType, wordType, TWordTypes, wordTypeGroup } from './model';

export class WordType implements IWordType {
  list(): TWordTypes {
    return Object.values(wordType);
  }

  findSections(type: wordType | TWordTypes): TWordSections {
    const types = Array.isArray(type) ? type : [type as wordType];

    return types.reduce((res: wordSection[], typeName: wordType) => {
      const sections = wordTypeGroup[typeName] || [];
      res = res.concat(sections);

      return res;
    }, []);
  }
}
