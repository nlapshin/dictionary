import { IWordServiceSection } from './section/model';
import { IWordServiceType } from './type/model';
import { IWordServiceRate } from './rate/model';

export interface IWordService {
  section: IWordServiceSection;
  type: IWordServiceType;
  rate: IWordServiceRate;
}
