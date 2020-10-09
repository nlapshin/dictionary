import { wordType, TWordTypes, wordTypeGroup, wordSection, TWordSections  } from '../../instance/model';
import { IWordServiceType } from './model';

export class WordServiceType implements IWordServiceType {
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
