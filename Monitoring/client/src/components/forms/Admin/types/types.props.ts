import {
  IAdminCreateUser,
  IAdminEditUser,
  IAdminUpdateUser,
} from "@/types/api";
import { IOptionSelect } from "@/types/general";
import { IAdminDataForm, IUserAndRight } from "./types";

export interface IAdminEditUserProps {
  setShow: (value: boolean) => void;
  entry: IAdminEditUser;
  updateEntry: (args: IAdminUpdateUser) => void;
  deleteEntry: (id: string) => void;
  selectsRights: IOptionSelect[];
}

export interface IAdminCreateUserProps {
  setShow: (value: boolean) => void;
  create: (args: IAdminCreateUser) => void;
  selectsRights: IOptionSelect[];
}

export interface IAdminDataFormProps {
  data: IAdminDataForm;
  children?: JSX.Element;
}

export interface IAdminUserList {
  entry: IUserAndRight;
  change: (id: string) => void;
}
