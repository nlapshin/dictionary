import { IQuiz, QuizType } from './model';

export class Quiz implements IQuiz {
	make(type: QuizType) {
		if (type === QuizType.exam) {
			return this.exam();
		}

		if (type === QuizType.selection) {
			return this.selection();
		}

		throw new Error(`quiz type ${type} not supported`);
	}

	selection() {
		console.log('run selection quiz!');
	}

	exam() {
		console.log('run exam quiz!');
	}
}
