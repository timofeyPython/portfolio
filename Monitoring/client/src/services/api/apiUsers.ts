import { IListUser } from "@/components/forms/Group/types/types";
import { IGetUser } from "@/types/api";
import { EApiPath } from "@/types/apiPath.enum";
import { clientAPI } from "@services/utils/clientApi";

export const getUsers = clientAPI<IListUser[]>({
  method: "GET",
  path: EApiPath.USERS,
});

export const getUser = (id: string) =>
  clientAPI<IGetUser>({
    method: "GET",
    path: `${EApiPath.USERS}/${id}`,
  })();
