export type WordSection =
	'stage' | 'movement' | 'present_quantity' | 'everyday_life' | 'felling' |
	'perception_thinking' | 'working' | 'intercourse' | 'fighting' |
	'qualities_given_in_senses' | 'time' | 'faculties_ability' | 'emotion_feeling_frame_of_mind' |
	'moral_behaviour' | 'abstract_adjectives';

export type WordSubSection =
	'beginning' | 'continuation' | 'end' |
	'ways_of_movement' | 'upward' | 'speed' | 'pursuit' | 'start_to_finish' | 'movement_in_water' |
	'presence_belonging' | 'lack' | 'addition_excess' | 'shortening' | 'preservation' | 'position' |
	'live' | 'work' | 'eat_drink' | 'dress' | 'sleep_tidy_up' | 'be_ill' |
	'good_attitude' | 'bad_attitude' | 'grief_joy' | 'pride_modesty' | 'confidence_doubt' | 'dilingence_laziness' | 'shade_of_emotion' |
	'perception_of_world' | 'instruction' | 'learning' | 'logical' |
	'work_do' | 'prepare_control' | 'take_and_other' | 'connect_fix' | 'open_close' | 'destroy_divide' | 'operations_with_water' |
	'speak' | 'address' | 'answer' | 'take' | 'give' | 'visit_etiq' | 'breach_of_etiq' |
	'attack' | 'defend_oneself' | 'field_operations' | 'actions_with_weapons' |
	'eye_color_senses' | 'eye_size_senses' | 'eye_shape_senses' |
	'skin_temperature_senses' | 'skin_surface_senses' | 'skin_humidity_senses' |
	'tongue_senses' | 'ear_senses' | 'nose_senses' |
	'main_properties' | 'stages' | 'continuity_frequency' |
	'ability' | 'absence_of_ability' | 'diligence_attention' | 'skill_experience' |
	'character' | 'frame_of_mind' | 'emotional_estimation' | 'shade_of_emotion' |
	'attitude_to_other_people' | 'qualities_of_intercourse' | 'qualities_in_actions' |
	'classification' | 'quality' | 'quantity' | 'category' | 'accordance' | 'advantage';

export const wordSection = {
	stage: 'stage' as WordSection,
	movement: 'movement' as WordSection,
	presence_quantity: 'presence_quantity' as WordSection,
	everyday_life: 'everyday_life' as WordSection,
	felling: 'felling' as WordSection,
	perception_thinking: 'perception_thinking' as WordSection,
	working: 'working' as WordSection,
	intercourse: 'intercourse' as WordSection,
	fighting: 'fighting' as WordSection,
	qualities_given_in_senses: 'qualities_given_in_senses' as WordSection,
	time: 'time' as WordSection,
	faculties_ability: 'faculties_ability' as WordSection,
	emotion_feeling_frame_of_mind: 'emotion_feeling_frame_of_mind' as WordSection,
	moral_behaviour: 'moral_behaviour' as WordSection,
	abstract_adjectives: 'abstract_adjectives' as WordSection
};

export const wordSubSection = {
	beginning: 'beginning' as WordSubSection,
	continuation: 'continuation' as WordSubSection,
	end: 'end' as WordSubSection,
	ways_of_movement: 'ways_of_movement' as WordSubSection,
	upward: 'upward' as WordSubSection,
	speed: 'speed' as WordSubSection,
	pursuit: 'pursuit' as WordSubSection,
	start_to_finish: 'start_to_finish' as WordSubSection,
	movement_in_water: 'movement_in_water' as WordSubSection,
	presence_belonging: 'presence_belonging' as WordSubSection,
	lack: 'lack' as WordSubSection,
	addition_excess: 'addition_excess' as WordSubSection,
	shortening: 'shortening' as WordSubSection,
	preservation: 'preservation' as WordSubSection,
	position: 'position' as WordSubSection,
	live: 'live' as WordSubSection,
	work: 'work' as WordSubSection,
	eat_drink: 'eat_drink' as WordSubSection,
	dress: 'dress' as WordSubSection,
	sleep_tidy_up: 'sleep_tidy_up' as WordSubSection,
	be_ill: 'be_ill' as WordSubSection,
	good_attitude: 'good_attitude' as WordSubSection,
	bad_attitude: 'bad_attitude' as WordSubSection,
	grief_joy: 'grief_joy' as WordSubSection,
	pride_modesty: 'pride_modesty' as WordSubSection,
	confidence_doubt: 'confidence_doubt' as WordSubSection,
	dilingence_laziness: 'dilingence_laziness' as WordSubSection,
	shade_of_emotion: 'shade_of_emotion' as WordSubSection,
	perception_of_world: 'perception_of_world' as WordSubSection,
	instruction: 'instruction' as WordSubSection,
	learning: 'learning' as WordSubSection,
	logical: 'logical' as WordSubSection,
	work_do: 'work_do' as WordSubSection,
	prepare_control: 'prepare_control' as WordSubSection,
	take_and_other: 'take_and_other' as WordSubSection,
	connect_fix: 'connect_fix' as WordSubSection,
	open_close: 'open_close' as WordSubSection,
	destroy_divide: 'destroy_divide' as WordSubSection,
	operations_with_water: 'operations_with_water' as WordSubSection,
	speak: 'speak' as WordSubSection,
	address: 'address' as WordSubSection,
	answer: 'answer' as WordSubSection,
	take: 'take' as WordSubSection,
	give: 'give' as WordSubSection,
	visit_etiq: 'visit_etiq' as WordSubSection,
	breach_of_etiq: 'breach_of_etiq' as WordSubSection,
	attack: 'attack' as WordSubSection,
	defend_oneself: 'defend_oneself' as WordSubSection,
	field_operations: 'field_operations' as WordSubSection,
	actions_with_weapons: 'actions_with_weapons' as WordSubSection,
	eye_color_senses: 'eye_color_senses' as WordSubSection,
	eye_size_senses: 'eye_size_senses' as WordSubSection,
	eye_shape_senses: 'eye_shape_senses' as WordSubSection,
	skin_temperature_senses: 'skin_temperature_senses' as WordSubSection,
	skin_surface_senses: 'skin_surface_senses' as WordSubSection,
	skin_humidity_senses: 'skin_humidity_senses' as WordSubSection,
	tongue_senses: 'tongue_senses' as WordSubSection,
	ear_senses: 'ear_senses' as WordSubSection,
	nose_senses: 'nose_senses' as WordSubSection,
	main_properties: 'main_properties' as WordSubSection,
	stages: 'stages' as WordSubSection,
	continuity_frequency: 'continuity_frequency' as WordSubSection,
	ability: 'ability' as WordSubSection,
	absence_of_ability: 'absence_of_ability' as WordSubSection,
	diligence_attention: 'diligence_attention' as WordSubSection,
	skill_experience: 'skill_experience' as WordSubSection,
	character: 'character' as WordSubSection,
	frame_of_mind: 'frame_of_mind' as WordSubSection,
	emotional_estimation: 'emotional_estimation' as WordSubSection,
	attitude_to_other_people: 'attitude_to_other_people' as WordSubSection,
	qualities_of_intercourse: 'qualities_of_intercourse' as WordSubSection,
	qualities_in_actions: 'qualities_in_actions' as WordSubSection,
	classification: 'classification' as WordSubSection,
	quality: 'quality' as WordSubSection,
	quantity: 'quantity' as WordSubSection,
	category: 'category' as WordSubSection,
	accordance: 'accordance' as WordSubSection,
	advantage: 'advantage' as WordSubSection,
};
