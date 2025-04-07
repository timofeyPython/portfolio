import {
  IApiBodyUpdateGroupAndInvatedUsers,
  IApiCreateGroupAndInvatedUsers,
  IApiGetGroupsAndInvatedUser,
} from "@/types/api";
import { IOptionSelect, IUserRights } from "@/types/general";
import { IGroup, IGroupList, IInvatedUsers, IUser, UserInfo } from "./types";

export interface ICreateGroupProps {
  setShow: (val: boolean) => void;
  userLists: Array<IOptionSelect>;
  rightsLists: Array<IOptionSelect>;
  createEntry: (args: IApiCreateGroupAndInvatedUsers) => void;
}

export interface IEditGroupProps {
  setShow: (val: boolean) => void;
  data: IApiGetGroupsAndInvatedUser;
  updateEntry: (args: IApiBodyUpdateGroupAndInvatedUsers) => void;
  deleteEntry: (id: string) => void;
  userLists: Array<IOptionSelect>;
  rightsLists: Array<IOptionSelect>;
}

export interface IDataIProps {
  title: string;
  setName(val: string): void;
  setFullName(val: string): void;
  setDescription(val: string): void;
}

export interface IDataPropsEdit {
  value1?: string;
  value2?: string;
  value3?: string;
}

export interface IDataListsInvatedProps {
  users: Array<IOptionSelect>;
  rights: Array<IOptionSelect>;
  onChangeUser(val: IOptionSelect): void;
  onChangeRight(val: string): void;
  setInvatedUser(list: IInvatedUsers[]): void;
  selectRightId: string;
  invatedUsers: Array<IInvatedUsers>;
  selectUser: IOptionSelect | null;
}

export interface IGroupListProps {
  list: IGroupList;
  listsUser: Array<IUser>;
  fn: (id: string) => void;
}

export interface IGroupsListsProps {
  title: string;
  lists: Array<IGroup>;
  change?(id: string): void;
}

export interface IGroupUserProps {
  entry: UserInfo;
  children?: JSX.Element;
}

export interface IGroupUsersProps {
  users: Array<UserInfo>;
  rights: Array<IUserRights>;
}
