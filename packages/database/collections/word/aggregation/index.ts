import { Collection } from 'mongodb';
import { groupBy, shuffle } from 'lodash';

import { ObjectAny } from '@dcdefinition';
import { Word } from '@dcword';

import { IWord } from '@dcword/model';

import { IDBWord } from '../store/model';
import { IDBWordFilter, IDBWordsGroup, IDBWordsSectionGroup } from './model';

export class WordAggregation {
  private word: IWord;

  constructor(private collection: Collection) {
    this.word = new Word();
  }

  list(query, opts): Promise<IDBWord[]> {
    return this.collection.find<IDBWord>(query, opts).toArray();
  }

  async listShuffle(query, opts): Promise<IDBWord[]> {
    const words = await this.list(query, opts);

    return shuffle(words);
  }

  async listFilter(filter: IDBWordFilter, opts): Promise<IDBWord[]> {
    const query: ObjectAny = {};

    if (filter.sections && filter.sections.length) {
      query.section = { $in: filter.sections };
    }

    if (filter.subsections && filter.subsections.length) {
      query.subsections = { $in: filter.subsections };
    }

    if (filter.status) {
      const rate = this.word.rate.caluclateByStatus(filter.status);

      if (rate > 0) {
        query.rate = { $lt: rate };
      }
    }

    if (filter.words) {
      query._id = { $in: filter.words.map(word => word._id) };
    }

    return this.list(query, opts);
  }

  async groupBy(lang = 'eng', filter: IDBWordFilter, opts): Promise<IDBWordsGroup> {
    const list = await this.listFilter(filter, opts);

    return groupBy(list, lang);
  }

  async groupByAlphabet(lang = 'eng', filter: IDBWordFilter, opts): Promise<IDBWordsGroup> {
    const list = await this.listFilter(filter, opts);

    return groupBy(list, (w: IWord) => {
      const word = w[lang] as string;

      return word.charAt(0);
    });
  }

  async groupBySections(filter: IDBWordFilter, opts): Promise<IDBWordsSectionGroup> {
    const group: IDBWordsSectionGroup = {};

    const words = await this.listFilter(filter, opts);

    const sections = groupBy(words, 'section');
    const sectionKeys = Object.keys(sections);

    sectionKeys.forEach((section: string) => {
      group[section] = groupBy(sections[section], 'subsection');
    });

    return group;
  }
}
