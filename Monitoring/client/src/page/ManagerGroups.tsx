import UI from "@components/UI";
import { CreateGroup } from "@/components/forms/Group/CreateGroup";
import { EditGroup } from "@/components/forms/Group/EditGroup";
import { GroupsLists } from "@forms/Group/GroupLists";
import { IGroup, IRightsUser } from "@/components/forms/Group/types/types";
import {
  createGroupAndInvatedUsers,
  deleteGroup,
  getGroupAndInvatedUsers,
  getGroups,
  updateGroupAndInvatedUsers,
} from "@/services/api/apiGroups";
import { useState, useEffect } from "react";
import {
  IApiBodyUpdateGroupAndInvatedUsers,
  IApiCreateGroupAndInvatedUsers,
  IApiGetGroupsAndInvatedUser,
} from "@/types/api";
import { getUsers } from "@/services/api/apiUsers";
import { getRightsGroups } from "@/services/api/apiRights";
import { IOptionSelect } from "@/types/general";

export function ManagerGroups() {
  const [groups, setGroups] = useState<Array<IGroup>>([]);
  const [showCreate, setShowCreate] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editGroup, setEditGrpoup] =
    useState<IApiGetGroupsAndInvatedUser | null>(null);
  const [userLists, setUserLists] = useState<Array<IOptionSelect>>([]);
  const [rightsLists, setRightsLists] = useState<Array<IOptionSelect>>([]);

  // Выгрузка списков пользователей и прав.
  const fetchOptions = async () => {
    const dataUsers = await getUsers();
    const dataRights = await getRightsGroups();
    setUserLists(
      dataUsers.map((user) => ({
        value: user.id,
        label: user.name,
      })),
    );
    setRightsLists(
      dataRights.map((right: IRightsUser) => ({
        value: right.id,
        label: right.description,
      })),
    );
  };

  // Получение группы
  const getEntry = async (id: string) => {
    const data = await getGroupAndInvatedUsers(id);
    await fetchOptions();
    setEditGrpoup(data);
    setShowEdit(!showEdit);
  };

  const updateEntry = async (args: IApiBodyUpdateGroupAndInvatedUsers) => {
    const result = await updateGroupAndInvatedUsers(args);
    if (result) {
      setGroups(
        groups.map((group) => (group.id === args.id ? result.entry : group)),
      );
      setShowEdit(!showEdit);
    }
  };

  const createEntry = async (args: IApiCreateGroupAndInvatedUsers) => {
    const result = await createGroupAndInvatedUsers(args);
    if (result) {
      setGroups([...groups, result.entry]);
      setShowCreate(!showCreate);
    }
  };

  const showCreateEntry = async () => {
    fetchOptions();
    setShowCreate(!showCreate);
  };

  const deleteEntry = async (id: string) => {
    const result = await deleteGroup(id);
    setGroups(groups.filter((group) => group.id != id));
    if (result) setShowEdit(false);
  };

  const fetchData = async () => {
    const dataGroups = await getGroups();
    setGroups(dataGroups);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1>Менеджер групп</h1>
            <button className="btn btn-light" onClick={() => showCreateEntry()}>
              Добавить группу
            </button>
          </div>
          <hr />
        </div>
        <div>
          {groups && (
            <GroupsLists
              title="Мои добавленные группы"
              lists={groups}
              change={getEntry}
            />
          )}
        </div>
        <UI.MyModal show={showCreate}>
          <CreateGroup
            setShow={async () => setShowCreate(false)}
            userLists={userLists}
            rightsLists={rightsLists}
            createEntry={createEntry}
          />
        </UI.MyModal>
        <UI.MyModal show={showEdit}>
          {editGroup ? (
            <EditGroup
              data={editGroup}
              setShow={() => setShowEdit(false)}
              updateEntry={updateEntry}
              deleteEntry={deleteEntry}
              userLists={userLists}
              rightsLists={rightsLists}
            />
          ) : (
            <></>
          )}
        </UI.MyModal>
      </div>
    </>
  );
}
