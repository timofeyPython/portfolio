import { EDBNameTable } from "@src/lib/types/enum";
import { TaskCategory } from "./task-category.model";

export const taskCategoryProviders = [
  {
    provide: EDBNameTable.TASK_CATEGORY_TABLE,
    useValue: TaskCategory,
  },
];
