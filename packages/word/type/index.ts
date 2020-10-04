import { wordSection } from '../model';
import { IWordType, wordType, wordTypeGroup } from './model';

export class WordType implements IWordType {
	findSections(type: wordType | wordType[]): wordSection[] {
		const types = Array.isArray(type) ? type : [type as wordType];

		return types.reduce((res: wordSection[], typeName: wordType) => {
			const sections = wordTypeGroup[typeName] || [];
			res = res.concat(sections);

			return res;
		}, []);
	}
}
