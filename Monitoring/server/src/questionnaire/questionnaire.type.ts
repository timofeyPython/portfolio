export interface IQuestions {
  test: Array<IQuestion>;
}

interface IQuestion {
  id: string;
  number: number;
  question: number;
  answerId: string;
  options: Array<{
    id: string;
    description: string;
  }>;
}
