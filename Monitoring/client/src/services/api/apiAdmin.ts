import { EApiPath } from "@/types/apiPath.enum";
import { clientAPI } from "@services/utils/clientApi";
import { IAdminCreateUser, IApiGetUser } from "@/types/api";
import { IUserAndRight } from "@/components/forms/Admin/types/types";

export const getUsersAndRights = clientAPI<IUserAndRight[]>({
  method: "GET",
  path: EApiPath.ADMINS,
});

export const getRights = clientAPI<Array<{ id: string; description: string }>>({
  method: "GET",
  path: EApiPath.RIGHTS_USERS,
});

export const getUser = (id: string) =>
  clientAPI<IApiGetUser>({
    method: "GET",
    path: `${EApiPath.ADMINS}/${id}`,
  })();

export const createUser = (data: IAdminCreateUser) =>
  clientAPI<{ message: string }>({
    method: "POST",
    path: EApiPath.ADMINS,
    data,
  })();

export const updateUser = (data: IAdminCreateUser) =>
  clientAPI<{ message: string }>({
    method: "PUT",
    path: EApiPath.ADMINS,
    data,
  })();

export const deleteUser = (id: string) =>
  clientAPI<{ message: string }>({
    method: "DELETE",
    path: `${EApiPath.ADMINS}/${id}`,
  })();
