export type PhraseSection = 'house' | 'stairs' | 'thunder_and_lighting' | 'snow' | 'cloud';

export const phraseSection = {
  cloud: 'cloud' as PhraseSection,
  stairs: 'stairs' as PhraseSection,
  house: 'house' as PhraseSection,
  thunder_and_lighting: 'thunder_and_lighting' as PhraseSection,
  snow: 'snow' as PhraseSection
}

export interface IPhrase {
  rus: string,
  eng: string,
  section: PhraseSection
}

export type IPhrases = IPhrase[];

export interface IPhrasesGroup {
  [s: string]: IPhrases
}
