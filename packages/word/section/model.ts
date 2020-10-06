export type TWordSectionGroup = { [key in wordSection]: wordSubSection[] };

export interface IWordSection {
  findSubSections(section: wordSection | wordSection[]): wordSubSection[];
}

export enum wordSection {
  stage = 'stage',
  movement = 'movement',
  presence_quantity = 'presence_quantity',
  everyday_life = 'everyday_life',
  felling = 'felling',
  perception_thinking = 'perception_thinking',
  working = 'working',
  intercourse = 'intercourse',
  fighting = 'fighting',
  qualities_given_in_senses = 'qualities_given_in_senses',
  time = 'time',
  faculties_ability = 'faculties_ability',
  emotion_feeling_frame_of_mind = 'emotion_feeling_frame_of_mind',
  moral_behaviour = 'moral_behaviour',
  abstract_adjectives = 'abstract_adjectives'
}

export enum wordSubSection {
  beginning = 'beginning',
  continuation = 'continuation',
  end = 'end',
  ways_of_movement = 'ways_of_movement',
  upward = 'upward',
  speed = 'speed',
  pursuit = 'pursuit',
  start_to_finish = 'start_to_finish',
  movement_in_water = 'movement_in_water',
  presence_belonging = 'presence_belonging',
  lack = 'lack',
  addition_excess = 'addition_excess',
  shortening = 'shortening',
  preservation = 'preservation',
  position = 'position',
  live = 'live',
  work = 'work',
  eat_drink = 'eat_drink',
  dress = 'dress',
  sleep_tidy_up = 'sleep_tidy_up',
  be_ill = 'be_ill',
  good_attitude = 'good_attitude',
  bad_attitude = 'bad_attitude',
  grief_joy = 'grief_joy',
  pride_modesty = 'pride_modesty',
  confidence_doubt = 'confidence_doubt',
  dilingence_laziness = 'dilingence_laziness',
  shade_of_emotion = 'shade_of_emotion',
  perception_of_world = 'perception_of_world',
  instruction = 'instruction',
  learning = 'learning',
  logical = 'logical',
  work_do = 'work_do',
  prepare_control = 'prepare_control',
  take_and_other = 'take_and_other',
  connect_fix = 'connect_fix',
  open_close = 'open_close',
  destroy_divide = 'destroy_divide',
  operations_with_water = 'operations_with_water',
  speak = 'speak',
  address = 'address',
  answer = 'answer',
  take = 'take',
  give = 'give',
  visit_etiq = 'visit_etiq',
  breach_of_etiq = 'breach_of_etiq',
  attack = 'attack',
  defend_oneself = 'defend_oneself',
  field_operations = 'field_operations',
  actions_with_weapons = 'actions_with_weapons',
  eye_color_senses = 'eye_color_senses',
  eye_size_senses = 'eye_size_senses',
  eye_shape_senses = 'eye_shape_senses',
  skin_temperature_senses = 'skin_temperature_senses',
  skin_surface_senses = 'skin_surface_senses',
  skin_humidity_senses = 'skin_humidity_senses',
  tongue_senses = 'tongue_senses',
  ear_senses = 'ear_senses',
  nose_senses = 'nose_senses',
  main_properties = 'main_properties',
  stages = 'stages',
  continuity_frequency = 'continuity_frequency',
  ability = 'ability',
  absence_of_ability = 'absence_of_ability',
  diligence_attention = 'diligence_attention',
  skill_experience = 'skill_experience',
  character = 'character',
  frame_of_mind = 'frame_of_mind',
  emotional_estimation = 'emotional_estimation',
  attitude_to_other_people = 'attitude_to_other_people',
  qualities_of_intercourse = 'qualities_of_intercourse',
  qualities_in_actions = 'qualities_in_actions',
  classification = 'classification',
  quality = 'quality',
  quantity = 'quantity',
  category = 'category',
  accordance = 'accordance',
  advantage = 'advantage',
}

export const wordSectionGroup: TWordSectionGroup = {
  [wordSection.stage]: [
    wordSubSection.beginning, wordSubSection.continuation, wordSubSection.end
  ],
  [wordSection.movement]: [
    wordSubSection.ways_of_movement, wordSubSection.upward, wordSubSection.speed,
    wordSubSection.pursuit, wordSubSection.start_to_finish, wordSubSection.movement_in_water
  ],
  [wordSection.presence_quantity]: [
    wordSubSection.presence_belonging, wordSubSection.lack, wordSubSection.addition_excess,
    wordSubSection.shortening, wordSubSection.preservation, wordSubSection.position
  ],
  [wordSection.everyday_life]: [
    wordSubSection.live, wordSubSection.work, wordSubSection.eat_drink,
    wordSubSection.dress, wordSubSection.sleep_tidy_up, wordSubSection.be_ill
  ],
  [wordSection.felling]: [
    wordSubSection.good_attitude, wordSubSection.bad_attitude, wordSubSection.grief_joy,
    wordSubSection.pride_modesty, wordSubSection.confidence_doubt, wordSubSection.dilingence_laziness,
    wordSubSection.shade_of_emotion
  ],
  [wordSection.perception_thinking]: [
    wordSubSection.perception_of_world, wordSubSection.instruction,
    wordSubSection.learning, wordSubSection.logical
  ],
  [wordSection.working]: [
    wordSubSection.work_do, wordSubSection.prepare_control, wordSubSection.take_and_other,
    wordSubSection.connect_fix, wordSubSection.open_close, wordSubSection.destroy_divide,
    wordSubSection.operations_with_water
  ],
  [wordSection.intercourse]: [
    wordSubSection.speak, wordSubSection.address, wordSubSection.answer,
    wordSubSection.take, wordSubSection.give, wordSubSection.visit_etiq,
    wordSubSection.breach_of_etiq
  ],
  [wordSection.fighting]: [
    wordSubSection.attack, wordSubSection.defend_oneself, wordSubSection.field_operations,
    wordSubSection.actions_with_weapons
  ],
  [wordSection.qualities_given_in_senses]: [
    wordSubSection.eye_color_senses, wordSubSection.eye_size_senses, wordSubSection.eye_shape_senses,
    wordSubSection.skin_temperature_senses, wordSubSection.skin_surface_senses, wordSubSection.skin_humidity_senses,
    wordSubSection.tongue_senses, wordSubSection.ear_senses, wordSubSection.nose_senses
  ],
  [wordSection.time]: [
    wordSubSection.main_properties, wordSubSection.stages, wordSubSection.continuity_frequency
  ],
  [wordSection.faculties_ability]: [
    wordSubSection.ability, wordSubSection.absence_of_ability, wordSubSection.diligence_attention
  ],
  [wordSection.emotion_feeling_frame_of_mind]: [
    wordSubSection.character, wordSubSection.frame_of_mind, wordSubSection.emotional_estimation,
    wordSubSection.shade_of_emotion
  ],
  [wordSection.moral_behaviour]: [
    wordSubSection.main_properties, wordSubSection.attitude_to_other_people,
    wordSubSection.qualities_of_intercourse, wordSubSection.qualities_in_actions
  ],
  [wordSection.abstract_adjectives]: [
    wordSubSection.classification, wordSubSection.quality, wordSubSection.quantity,
    wordSubSection.category, wordSubSection.accordance, wordSubSection.advantage
  ]
};

