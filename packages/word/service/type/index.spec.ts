import { WordServiceType } from './';

import { wordType } from '../../instance/model';

describe('findSections', () => {
  it('should return all sections for types', () => {
    const type = new WordServiceType();

    expect(type.findSections(wordType.verb)).toEqual([
      'stage',
      'movement',
      'presence_quantity',
      'everyday_life',
      'felling',
      'perception_thinking',
      'working',
      'intercourse',
      'fighting',
    ]);
  });
});

