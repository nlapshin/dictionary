import { Collection } from 'mongodb';
import { groupBy, shuffle } from 'lodash';

import { caluclateRateByStatus } from '../instance';

import { ObjectAny, IWord, IWords } from '@dcdefinition';
import { IWordFilter, IWordsGroup, IWordsSectionGroup } from './model';

export class WordAggregation {
  constructor(private collection: Collection) {}

  list(query, opts): Promise<IWords> {
    return this.collection.find<IWord>(query, opts).toArray();
  }

  async listShuffle(query, opts): Promise<IWords> {
    const words = await this.list(query, opts);

    return shuffle(words);
  }

  async listFilter(filter: IWordFilter, opts): Promise<IWords> {
    const query: ObjectAny = {};

    if (filter.sections && filter.sections.length) {
      query.section = { $in: filter.sections };
    }

    if (filter.subsections && filter.subsections.length) {
      query.subsections = { $in: filter.subsections };
    }

    if (filter.status) {
      const rate = caluclateRateByStatus(filter.status);

      if (rate > 0) {
        query.rate = { $lt: caluclateRateByStatus(filter.status) };
      }
    }

    if (filter.words) {
      query._id = { $in: filter.words.map(word => word._id) };
    }

    return this.list(query, opts);
  }

  async groupBy(lang = 'eng', filter: IWordFilter, opts): Promise<IWordsGroup> {
    const list = await this.listFilter(filter, opts);

    return groupBy(list, lang);
  }

  async groupByAlphabet(lang = 'eng', filter: IWordFilter, opts): Promise<IWordsGroup> {
    const list = await this.listFilter(filter, opts);

    return groupBy(list, (w: IWord) => {
      const word = w[lang] as string;

      return word.charAt(0);
    });
  }

  async groupBySections(filter: IWordFilter, opts): Promise<IWordsSectionGroup> {
    const group: IWordsSectionGroup = {};

    const words = await this.listFilter(filter, opts);

    const sections = groupBy(words, 'section');
    const sectionKeys = Object.keys(sections);

    sectionKeys.forEach((section: string) => {
      group[section] = groupBy(sections[section], 'subsection');
    });

    return group;
  }
}
