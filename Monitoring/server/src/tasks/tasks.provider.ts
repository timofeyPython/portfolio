import { EDBNameTable } from "@lib/types/enum";
import { Tasks } from "./tasks.model";

export const tasksProviders = [
  {
    provide: EDBNameTable.TASKS_TABLE,
    useValue: Tasks,
  },
];
