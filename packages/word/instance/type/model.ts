import { wordSection } from '../section/model';

export enum wordType {
  noun = 'noun',
  adjective = 'adjective',
  verb = 'verb',
  adverb = 'adverb',
  pronoun = 'pronoun',
  numeral = 'numeral',
  article = 'article',
  preposition = 'preposition',
  conjunction = 'conjunction',
  interjection = 'interjection',
  pretext = 'pretext'
}

export type TWordTypes = wordType[];
export type TWordTypeGroup = { [key in wordType]: wordSection[] };

export const wordTypeGroup = {
  [wordType.verb]: [
    wordSection.stage, wordSection.movement, wordSection.presence_quantity,
    wordSection.everyday_life, wordSection.felling, wordSection.perception_thinking,
    wordSection.working, wordSection.intercourse, wordSection.fighting
  ],
  [wordType.adjective]: [
    wordSection.qualities_given_in_senses, wordSection.time, wordSection.faculties_ability,
    wordSection.emotion_feeling_frame_of_mind, wordSection.moral_behaviour
  ]
};
