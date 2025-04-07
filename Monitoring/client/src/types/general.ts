export enum EUserRightsGroups {
  PRIVILEGED = "PRIVILEGED",
  INVITED = "INVITED",
}

export enum EUserRights {
  ADMIN = "ADMIN",
  USER = "USER",
  EDITOR = "EDITOR",
}

export interface IClientApiOption<T> {
  method: "POST" | "GET" | "PUT" | "DELETE";
  path: string;
  parameters?: T;
  data?: T;
}

export interface IOptionSelect {
  value: string;
  label: string;
}

export interface IUserRights {
  groupId: string;
  rightId: string;
  userId: string;
  rightName: string;
}

export interface IInfoUser {
  login: string;
  position: string;
  name: string;
  id: string;
  rights: {
    group: Array<IUserRights>;
    user: {
      role: EUserRights.ADMIN | EUserRights.EDITOR | EUserRights.USER | "";
    };
  };
}
