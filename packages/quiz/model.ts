export enum QuizType {
	selection = 'selection',
	exam = 'exam'
}

export interface IQuiz {
	make(type: QuizType);
	selection();
	exam();
}


