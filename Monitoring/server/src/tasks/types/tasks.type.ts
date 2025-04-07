export type TTemplateUser = {
  id: string;
  name: string;
};

export type TStage = {
  current: TStageEntry;
  history?: Array<TStageEntryHistory>;
  deadline: Date;
};

export type TStageEntry = {
  date: Date;
  status: string;
  description: string;
};

type TStageEntryHistory = TStageEntry & { description: string };

export interface ITasksFindAllParams {
  grId: string;
  date?: {
    start: Date;
    end: Date;
  };
  active?: boolean;
  assignedId?: string;
}
