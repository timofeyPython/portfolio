import { IGetUser } from "@/types/api";
import { EUserRights, IOptionSelect } from "@/types/general";

export interface IUserAndRight {
  user: IGetUser;
  rights: {
    role: EUserRights.ADMIN | EUserRights.EDITOR | EUserRights.USER;
  };
}

export interface IAdminDataForm {
  form1: {
    label: string;
    id: string;
    value: string;
    onInput: (val: string) => void;
  };
  form2: {
    label: string;
    id: string;
    value: string;
    onInput: (val: string) => void;
  };
  form3: {
    label: string;
    id: string;
    options: IOptionSelect[];
    onChange: (val: string) => void;
    select?: string;
  };
}
