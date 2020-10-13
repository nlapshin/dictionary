import * as inquirer from 'inquirer';

import { Language } from '../../language/model';

import { TWordTypes } from '../type/model';
import { TWordSections } from '../section/model';
import { wordStatus } from '../status/model';

import { IWordType } from '../type/model';
import { IWordSection } from '../section/model';

import { IWordInquirer, IWordInquirerQuestion } from './model';

export class WordInquirer implements IWordInquirer {
  constructor(private type: IWordType, private section: IWordSection) {}

  get list() {
    return [
      {
        type: 'list',
        name: 'groupBy',
        message: 'lang',
        choices: [ Language.eng, Language.rus ]
      },
      {
        type: 'checkbox',
        name: 'types',
        message: 'Types',
        choices: this.type.list()
      },
      {
        type: 'checkbox',
        name: 'sections',
        message: 'sections',
        choices: (input: { types: TWordTypes }) => {
          const types = input.types;

          return this.type.findSections(types);
        }
      },
      {
        type: 'checkbox',
        name: 'subsections',
        message: 'subsections',
        choices: (input: { types: TWordTypes, sections: TWordSections }) => {
          const sections = input.sections;

          return this.section.findSubSections(sections);
        }
      },
      {
        type: 'list',
        name: 'status',
        message: 'status',
        choices: [ { name: 'whole', value: '' }, wordStatus.awful, wordStatus.bad, wordStatus.good, wordStatus.perfect ],
        default: ''
      }
    ];
  }

  exec(): Promise<IWordInquirerQuestion> {
    return inquirer.prompt(this.list);
  }
}
