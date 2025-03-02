export type TTested = {
  name: string;
  startDate: string;
  passTime: string;
  answer_count: string;
  answer: Array<{
    id: number;
    solution: string;
    date: string;
  }>;
};
