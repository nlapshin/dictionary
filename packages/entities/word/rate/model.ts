import { IWordStats } from '../stats/model';
import { wordStatus } from '../status/model';

export interface IWordRate {
  calculate(stats: IWordStats): number;
  caluclateByStatus(status: wordStatus): number;
}
