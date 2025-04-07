import { IEntryGroup } from "@/types/api";

export interface IGroupList {
  id: string;
  name: string;
  nameFull: string;
  description: string;
}

export interface IUser {
  id: string;
  name: string;
}

export interface IGroup extends IGroupList {
  participants: Array<{ id: string; name: string }>;
}

export interface UserInfo {
  id: string;
  title: string;
  icon: string;
  right: string;
  user: IUser;
  tasks: {
    active: number;
  };
}

export interface IGroupUser {
  users: Array<UserInfo>;
  group: IGroupList;
}

export interface IListUser {
  id: string;
  login: string;
  name: string;
}

export interface IRightsUser {
  id: string;
  name: string;
  description: string;
}

export interface IInvatedUsers {
  userId: string;
  rightId: string;
  description: string;
}

export interface IGroupEntry extends IEntryGroup {}
