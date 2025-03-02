export interface ITasks {
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
  groups: Array<string>;
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

export interface ITaskUpdate {
  id: string;
  description: string;
  stage: {
    current: {
      date: Date;
      status: string;
      description: string;
    };
    deadline?: Date;
  };
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
  stage: {
    current: ITasksStageHistory;
    deadline: Date;
  };
  startTask: Date;
  endTask: Date;
  grId: string;
  taskCategoryId: string;
}
