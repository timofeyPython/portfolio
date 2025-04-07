import { ITask } from "@/store/tasks/type";
import { IOptionSelect } from "@/types/general";
import { ERoutePath } from "@/types/routePath.enum";
import { clientAPI } from "@services/utils/clientApi";

export const getTasksCategory = clientAPI<IOptionSelect[]>({
  method: "GET",
  path: ERoutePath.TASK_CATEGORY,
});

export const getTasks = (userId: string, grId: string, active: boolean) =>
  clientAPI<Array<ITask>>({
    method: "GET",
    path: `${ERoutePath.TASKS}`,
    parameters: {
      grId,
      userId,
      active,
    },
  })();

export const createTaskCategory = (data: {
  name: string;
  description: string;
}) =>
  clientAPI<{
    entry: {
      id: string;
      name: string;
    };
  }>({
    method: "POST",
    path: `${ERoutePath.TASK_CATEGORY}`,
    data,
  })();
