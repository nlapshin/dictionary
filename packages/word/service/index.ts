import { WordServiceSection } from './section';
import { IWordServiceSection } from './section/model';

import { WordServiceType } from './type';
import { IWordServiceType } from './type/model';

import { WordServiceRate } from './rate';
import { IWordServiceRate } from './rate/model';

import { WordServiceMapping } from './mapping';
import { IWordServiceMapping } from './mapping/model';

import { WordServiceInquirer } from './inquirer';

import { IWordService } from './model';

export class WordService implements IWordService {
  public type: IWordServiceType;
  public section: IWordServiceSection;
  public rate: IWordServiceRate;

  public inquirer: WordServiceInquirer;
  public mapping: IWordServiceMapping;

  constructor() {
    this.type = new WordServiceType();
    this.section = new WordServiceSection();
    this.rate = new WordServiceRate();

    this.inquirer = new WordServiceInquirer(this.type, this.section);
    this.mapping = new WordServiceMapping();
  }
}
