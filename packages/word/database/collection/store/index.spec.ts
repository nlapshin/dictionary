import { Language } from '@dclanguage/model';
import { wordSection, wordSubSection } from '@dcword/model';
import { DBWordTest } from '../../test';

import { WordStore } from './';

const db = new DBWordTest();

describe('database:collections:word:store', () => {
  beforeEach(async () => {
    await db.start();
  });

  afterEach(async () => {
    return db.stop();
  });

  describe('findOneByUniqParams', () => {
    it('should find one word by uniqui parameters', async () => {
      const store = new WordStore(db.collection.collection);

      const word = await store.findOneByUniqParams({
        [Language.rus]: 'начинать(ся)',
        [Language.eng]: 'begin',
        section: wordSection.stage,
        subsection: wordSubSection.beginning
      });

      expect(word).toEqual({
        _id: word._id,
        rate: 100500,
        stats: { failure: 0, success: 0, attempts: 0 },
        [Language.eng]: 'begin',
        [Language.rus]: 'начинать(ся)',
        type: 'verb',
        section: 'stage',
        subsection: 'beginning'
      });
    });
  });
});

