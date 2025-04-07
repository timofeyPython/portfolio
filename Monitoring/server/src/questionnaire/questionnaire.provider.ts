import { EDBNameTable } from "@src/lib/types/enum";
import { Questionnaire } from "./questionnaire.model";

export const questionnaireProviders = [
  {
    provide: EDBNameTable.QUESTIONNAIRE,
    useValue: Questionnaire,
  },
];
