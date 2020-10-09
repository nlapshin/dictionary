import * as inquirer from 'inquirer';

import { TWordTypes, TWordSections, wordStatus } from '../../instance/model';

import { IWordServiceType } from '../type/model';
import { IWordServiceSection } from '../section/model';

export class WordServiceInquirer {
  constructor(private typeService: IWordServiceType, private sectionService: IWordServiceSection) {}

  get list() {
    return [
      {
        type: 'list',
        name: 'groupBy',
        message: 'lang',
        choices: [ 'eng', 'rus' ]
      },
      {
        type: 'checkbox',
        name: 'types',
        message: 'Types',
        choices: this.typeService.list()
      },
      {
        type: 'checkbox',
        name: 'sections',
        message: 'sections',
        choices: (input: { types: TWordTypes }) => {
          const types = input.types;

          return this.typeService.findSections(types);
        }
      },
      {
        type: 'checkbox',
        name: 'subsections',
        message: 'subsections',
        choices: (input: { types: TWordTypes, sections: TWordSections }) => {
          const sections = input.sections;

          return this.sectionService.findSubSections(sections);
        }
      },
      {
        type: 'list',
        name: 'status',
        message: 'status',
        choices: [ 'whole', wordStatus.awful, wordStatus.bad, wordStatus.good, wordStatus.perfect ],
        default: 'whole'
      }
    ];
  }

  exec() {
    return inquirer.prompt(this.list);
  }
}
