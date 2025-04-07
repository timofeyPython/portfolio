export interface ITask {
  id: string;
  name: string;
  description: string;
  number: number;
  createdUser: ITemplateUser;
  assigned: ITemplateUser;
  stage: {
    current: ITasksStageHistory;
    history?: Array<ITasksStageHistory>;
    deadline: Date;
  };
  startTask: Date;
  endTask: string;
  grId: string;
  createdAt: string;
  updatedAt: string;
  groups: {
    id: string;
    name: string;
  };
  taskCategory: {
    id: string;
    name: string;
  };
}

export interface ITasksStageHistory {
  date: Date;
  status: string;
  description?: string;
}

interface ITaskStage {
  current: ITasksStageHistory;
  deadline: Date;
}

export interface ITaskUpdate {
  id: string;
  description: string;
  stage: ITaskStage;
  name: string;
  taskCategoryId: string;
  startTask: Date;
  endTask: Date;
  grId: string;
}

interface ITemplateUser {
  name: string;
  id: string;
}

export interface ICreateTask {
  name: string;
  description: string;
  createdUser: ITemplateUser;
  assigned: ITemplateUser;
  stage: ITaskStage;
  startTask: Date;
  endTask: Date;
  grId: string;
  taskCategoryId: string;
}
