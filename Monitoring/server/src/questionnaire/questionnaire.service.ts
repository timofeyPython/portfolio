import { Inject, Injectable } from "@nestjs/common";
import { Questionnaire } from "./questionnaire.model";
import { PostBodyDto } from "./types/questionnaire.dto";
import { EDBNameTable } from "@src/lib/types/enum";

@Injectable()
export class QuestionnaireService {
  constructor(
    @Inject(EDBNameTable.QUESTIONNAIRE)
    private questionnaireModel: typeof Questionnaire,
  ) {}

  async findAll() {
    const tests = await this.questionnaireModel.findAll();
    return tests.sort((a, b) => a.sorted - b.sorted);
  }

  async findOne(id: string) {
    const test = await this.questionnaireModel.findOne({ where: { id } });
    const questions = test.questions.test.map(
      ({ id, number, question, options }) => ({
        id,
        number,
        question,
        options,
      })
    );

    const result: any = test;
    result.questions = questions;

    return Object.assign(test, questions);
  }

  async checkTest(object: PostBodyDto) {
    const tests = await this.questionnaireModel.findOne({
      where: { id: object.id },
    });

    const testError = tests.questions.test
      .map((test, i) => {
        const questionUser = object.answers.find(
          (answer) => answer.questionId === test.id
        );
        const check = questionUser?.answerId !== test.answerId;
        if (check)
          return {
            options: test?.options,
            answerUserId: questionUser?.answerId,
            answerCorrectId: test?.answerId,
            number: test?.number,
            question: test.question,
          };
      })
      .filter((answer) => answer);

    return {
      result: testError.length > 0 ? "Потрачено" : "Выполнено",
      message: `Отвечено правильно ${tests.questions.test.length - testError.length} из ${tests.questions.test.length}`,
      testError,
    };
  }
}
