export interface IQuizInstance {
  value: IQuizInstanceValue;
  inquirer: IQuizInstanceInquirer;
  test();
}

export interface IQuizInstanceValue {
  question: string;
  answer: string;
  stats?: IQuizStats;
}

export interface IQuizInstanceInquirer {
  type: string;
  name: string;
  message: string;
}

export interface IQuizStats {
  failure: number;
  success: number;
  attempts: number;
}
