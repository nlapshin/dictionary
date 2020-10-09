import { IWordStats, wordStatus } from '../../instance/model';

export interface IWordServiceRate {
  calculate(stats: IWordStats): number;
  caluclateByStatus(status: wordStatus): number;
}
