import { IWordRate, wordStatus } from './model';
import { IWordInstanceStats } from '../instance/model';

export class WordRate implements IWordRate {
  calculate(stats: IWordInstanceStats): number {
    const { success, failure } = stats;

    if (failure === 0) {
      return 100500;
    }

    const rate = +((success / failure).toFixed(1));

    return rate;
  }

  caluclateByStatus(status: wordStatus): number {
    if (status === wordStatus.perfect) {
      return 5;
    } else if (status === wordStatus.good) {
      return 2.5;
    } else if (status === wordStatus.bad) {
      return 1.7;
    } else if (status === wordStatus.awful) {
      return 1;
    }

    return 0;
  }

}
