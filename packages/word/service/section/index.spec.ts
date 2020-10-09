import { WordServiceSection } from './';
import { wordSection } from '../../instance/model';

describe('findSubSections', () => {
  it('should return all subsection for sections', () => {
    const ws = new WordServiceSection();

    expect(ws.findSubSections(wordSection.movement)).toEqual([
      'ways_of_movement',
      'upward',
      'speed',
      'pursuit',
      'start_to_finish',
      'movement_in_water',
    ]);
  });
});

