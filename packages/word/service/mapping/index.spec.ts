import { Language } from '@dclanguage/model';
import { wordType, wordSection, wordSubSection } from '../../instance/model';

import { WordServiceMapping } from './';

describe('difference', () => {
  it('should must cut off existing words', () => {
    const mapping = new WordServiceMapping();

    const words = [
      {
        _id: 'id',
        rate: 100500,
        stats: { failure: 0, success: 0, attempts: 0 },
        [Language.eng]: 'begin',
        [Language.rus]: 'начинать(ся)',
        type: wordType.verb,
        section: wordSection.stage,
        subsection: wordSubSection.beginning
      },
      {
        _id: 'id',
        rate: 100500,
        stats: { failure: 0, success: 0, attempts: 0 },
        [Language.eng]: 'prepare',
        [Language.rus]: 'готовиться',
        type: wordType.verb,
        section: wordSection.stage,
        subsection: wordSubSection.beginning
      }
    ];

    const cutWords = [
      {
        _id: 'id',
        rate: 100500,
        stats: { failure: 0, success: 0, attempts: 0 },
        [Language.eng]: 'begin',
        [Language.rus]: 'начинать(ся)',
        type: wordType.verb,
        section: wordSection.stage,
        subsection: wordSubSection.beginning
      }
    ];

    const expectedWords = [
      {
        _id: 'id',
        rate: 100500,
        stats: { failure: 0, success: 0, attempts: 0 },
        [Language.eng]: 'prepare',
        [Language.rus]: 'готовиться',
        type: wordType.verb,
        section: wordSection.stage,
        subsection: wordSubSection.beginning
      }
    ];

    expect(mapping.difference(words, cutWords)).toEqual(expectedWords);
  });
});


