import { IWord, WordStats, WordStatus, wordStatus } from '@dcdefinition';

export function generateWord(inst: IWord): IWord {
	const defaultWord = {
		rate: 100500,
		stats: { failure: 0, success: 0, attempts: 0 }
	};

	return { ...defaultWord, ...inst };
}

export function calculateRate(stats: WordStats): number {
	const { success, failure } = stats;

	if (failure === 0) {
		return 100500;
	}

	const rate = +((success / failure).toFixed(1));

	return rate;
}

export function caluclateRateByStatus(status: WordStatus): number {
	if (status === wordStatus.perfect) {
		return 5;
	} else if (status === wordStatus.good) {
		return 2.5;
	} else if (status === wordStatus.bad) {
		return 1.7;
	} else if (status === wordStatus.awful) {
		return 1;
	}

	return 0;
}
