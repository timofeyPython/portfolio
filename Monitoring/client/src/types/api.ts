import { IInvatedUsers } from "@/components/forms/Group/types/types";
import { IInfoUser } from "./general";

export interface IApiCreateGroupAndInvatedUsers {
  shortNameGroup: string;
  nameGroup: string;
  description: string;
  invatedUsers: Array<IInvatedUsers>;
}

export interface IApiBodyUpdateGroupAndInvatedUsers
  extends IApiCreateGroupAndInvatedUsers {
  id: string;
}

export enum EGroupQueryTypes {
  USER = "user",
  INVITED = "invited",
}

export interface IGetUser {
  id: string;
  name: string;
  login: string;
}

export interface IAdminCreateUser {
  login: string;
  name: string;
  role: string;
  password?: string;
}

export interface IAdminUpdateUser extends IGetUser {
  role: string;
}

export interface IAdminEditUser extends IGetUser {
  role: string;
}

export interface IApiGetUser {
  user: IGetUser;
  rights: {
    role: string;
    id: string;
  };
}

export interface IEntryGroup {
  id: string;
  name: string;
  nameFull: string;
  description: string;
}

export interface IApiGetGroupsAndInvatedUser {
  entry: IEntryGroup;
  invatedUsers: Array<IInvatedUsers>;
}

export interface IApiGetGroups {
  entry: IEntryGroup;
}

export interface IApiGetCheck {
  refreshToken: string;
  info: IInfoUser;
}
