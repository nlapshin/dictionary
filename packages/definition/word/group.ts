import { wordType } from './type';
import { wordSection, wordSubSection } from './section';

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
}

export const wordSectionGroup = {
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
}
