import { EApiPath } from "@/types/apiPath.enum";
import { clientAPI } from "@services/utils/clientApi";
import {
  IApiBodyUpdateGroupAndInvatedUsers,
  IApiCreateGroupAndInvatedUsers,
  IApiGetGroups,
  IApiGetGroupsAndInvatedUser,
} from "@/types/api";
import { IGroup, IGroupUser } from "@/components/forms/Group/types/types";

export const getGroups = clientAPI<IGroup[]>({
  method: "GET",
  path: EApiPath.GROUPS,
});

export const getGroupsInvated = clientAPI<IGroup[]>({
  method: "GET",
  path: EApiPath.GROUPS_CONF,
});

export const getGroupAndInvatedUsers = (id: string) =>
  clientAPI<IApiGetGroupsAndInvatedUser>({
    method: "GET",
    path: `${EApiPath.GROUPS_INVATED}/${id}`,
  })();

export const getGroup = (id: string) =>
  clientAPI<IApiGetGroups>({
    method: "GET",
    path: `${EApiPath.GROUPS}/${id}`,
  })();

export const deleteGroup = (id: string) =>
  clientAPI({
    method: "DELETE",
    path: `${EApiPath.GROUPS}/${id}`,
  })();

export const updateGroupAndInvatedUsers = ({
  id,
  shortNameGroup,
  nameGroup,
  description,
  invatedUsers,
}: IApiBodyUpdateGroupAndInvatedUsers) =>
  clientAPI<{ entry: IGroup }>({
    method: "PUT",
    path: EApiPath.GROUPS,
    data: {
      id,
      name: shortNameGroup,
      nameFull: nameGroup,
      description: description,
      invatedUsers: invatedUsers,
    },
  })();

export const createGroupAndInvatedUsers = ({
  shortNameGroup,
  nameGroup,
  description,
  invatedUsers,
}: IApiCreateGroupAndInvatedUsers) =>
  clientAPI<{ entry: IGroup }>({
    method: "POST",
    path: EApiPath.GROUPS,
    data: {
      name: shortNameGroup,
      nameFull: nameGroup,
      description: description,
      invatedUsers: invatedUsers,
    },
  })();

export const getGroupUser = (path: string) =>
  clientAPI<Promise<IGroupUser>>({
    method: "GET",
    path,
  })();
