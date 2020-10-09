import { wordStatus } from '../../instance/model';

import { WordServiceRate } from './';

describe('calculate', () => {
  it('should calculate rate by word statistics', () => {
    const rate = new WordServiceRate();

    expect(rate.calculate({
      failure: 10,
      success: 4,
      attempts: 14
    })).toEqual(0.4);
  });
});

describe('caluclateByStatus', () => {
  it('should calculate rate for status', () => {
    const rate = new WordServiceRate();

    expect(rate.caluclateByStatus(wordStatus.perfect)).toEqual(5);
    expect(rate.caluclateByStatus(wordStatus.good)).toEqual(2.5);
    expect(rate.caluclateByStatus(wordStatus.bad)).toEqual(1.7);
    expect(rate.caluclateByStatus(wordStatus.awful)).toEqual(1);
  });
});

