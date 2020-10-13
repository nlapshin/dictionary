import { Language, wordSection, wordSubSection } from '@dcentities/model';
import { DBTest } from '../../../test';

import { WordStore } from './';

const db = new DBTest();

describe('database:collections:word:store', () => {
  beforeEach(async () => {
    await db.start();
  });

  afterEach(async () => {
    return db.stop();
  });

  describe('findOneByUniqParams', () => {
    it('should find one word by uniqui parameters', async () => {
      const store = new WordStore(db.collections.word.collection);

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

