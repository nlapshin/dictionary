import { IWordInstanceStats } from '../instance/model';

export interface IWordRate {
  calculate(stats: IWordInstanceStats): number;
  caluclateByStatus(status: wordStatus): number;
}

export enum wordStatus {
  whole = 'whole',
  perfect = 'perfect',
  good = 'good',
  bad = 'bad',
  awful = 'awful'
}
