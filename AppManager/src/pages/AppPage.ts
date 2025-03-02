import "@scss/index.scss";
import { QuestionsPage } from "@pages/QuestionsPage";
import { MainPage } from "@/pages/MainPage";
import { ExcelPage } from "@pages/ExcelPage";
import { EPath } from "@/types/enum";

export default [
  {
    template: QuestionsPage,
    path: EPath.questions,
    storage: "questions",
  },
  {
    template: MainPage,
    path: "",
  },
  {
    template: ExcelPage,
    path: EPath.excel,
    storage: "excel",
  },
];
