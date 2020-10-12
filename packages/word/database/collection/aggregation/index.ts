import { Collection } from 'mongodb';
import { groupBy, shuffle } from 'lodash';

import { ObjectAny } from '@dcdefinition';
import { Language } from '@dclanguage/model';

import { WordService } from '../../../service';
import { IWordService } from '../../../service/model';

import { IDBWordInstance } from '../store/model';
import { IDBWordFilter, IDBWordsGroup, IDBWordsSectionGroup } from './model';

export class WordAggregation {
  private service: IWordService;

  constructor(private collection: Collection) {
    this.service = new WordService();
  }

  list(query, opts?): Promise<IDBWordInstance[]> {
    return this.collection.find<IDBWordInstance>(query, opts).toArray();
  }

  async listShuffle(query, opts?): Promise<IDBWordInstance[]> {
    const words = await this.list(query, opts);

    return shuffle(words);
  }

  async listFilter(filter: IDBWordFilter, opts?): Promise<IDBWordInstance[]> {
    const query: ObjectAny = {};

    if (filter.sections && filter.sections.length) {
      query.section = { $in: filter.sections };
    }

    if (filter.subsections && filter.subsections.length) {
      query.subsection = { $in: filter.subsections };
    }

    if (filter.status) {
      const rate = this.service.rate.caluclateByStatus(filter.status);

      if (rate > 0) {
        query.rate = { $lt: rate };
      }
    }

    if (filter.words) {
      query._id = { $in: filter.words.map(word => word._id) };
    }

    return this.list(query, opts);
  }

  async groupBy(lang = Language.eng, filter: IDBWordFilter, opts?): Promise<IDBWordsGroup> {
    const list = await this.listFilter(filter, opts);

    return groupBy(list, lang);
  }

  async groupByAlphabet(lang = Language.eng, filter: IDBWordFilter, opts?): Promise<IDBWordsGroup> {
    const list = await this.listFilter(filter, opts);

    return groupBy(list, (w: IDBWordInstance) => {
      const word = w[lang] as string;

      return word.charAt(0);
    });
  }

  async groupBySections(filter: IDBWordFilter, opts?): Promise<IDBWordsSectionGroup> {
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
