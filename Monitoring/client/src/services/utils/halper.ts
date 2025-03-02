import { ERoles } from "@/types/collection.enum";

export function transcription(str: string) {
  const res = {
    name: "",
    link: "",
  };
  switch (str) {
    case ERoles.EMPLOYEE:
      res.name = "Управление моими задачами";
      res.link = "mytasks";
      break;
    case ERoles.HEAD_OF_DEPARTAMENT:
      res.name = "Управление подразделением";
      res.link = "departaments";
      break;
    case ERoles.HEAD_OF_GROUPS:
      res.name = "Управление отделом";
      res.link = "groups";
      break;
  }

  return res;
}
