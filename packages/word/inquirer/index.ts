import { WordType } from '../type';
import { WordSection } from '../section';

import { IWordType, wordType } from '../type/model';
import { IWordSection, wordSection } from '../section/model';
import { wordStatus } from '../rate/model';

export class WordInquirer {
  private type: IWordType;
  private section: IWordSection;

  constructor() {
    this.type = new WordType();
    this.section = new WordSection();
  }

  get list() {
    return [
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
        choices: (input: { types: wordType[] }) => {
          const types = input.types;

          return this.type.findSections(types);
        }
      },
      {
        type: 'checkbox',
        name: 'subsections',
        message: 'subsections',
        choices: (input: { types: wordType[], sections: wordSection[] }) => {
          const sections = input.sections;

          return this.section.findSubSections(sections);
        }
      },
      {
        type: 'list',
        name: 'status',
        message: 'status',
        choices: [ wordStatus.whole, wordStatus.awful, wordStatus.bad, wordStatus.good, wordStatus.perfect ],
        default: wordStatus.whole
      }
    ];
  }
}
