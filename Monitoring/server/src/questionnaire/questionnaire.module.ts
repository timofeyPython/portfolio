import { Module } from "@nestjs/common";
import { QuestionnaireController } from "./questionnaire.controller";
import { QuestionnaireService } from "./questionnaire.service";
import { questionnaireProviders } from "./questionnaire.provider";

@Module({
  controllers: [QuestionnaireController],
  providers: [
    QuestionnaireService,
    ...questionnaireProviders,
  ],
})
export class QuestionnaireModule {}
