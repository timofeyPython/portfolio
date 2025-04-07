import { IInfoUser } from "./general";

export interface IStoreUser {
  isAuth: boolean;
  info: IInfoUser;
}

export interface IStoreUserSelection {
  selectGroup: string;
}
