import "./styles/admin-page.scss";
import { IUserAndRight } from "@/components/forms/Admin/types/types";
import { AdminUserList } from "@forms/Admin/AdminUserList";
import { AdminCreateUser } from "@forms/Admin/AdminCreateUser";
import {
  createUser,
  deleteUser,
  getRights,
  getUser,
  getUsersAndRights,
  updateUser,
} from "@/services/api/apiAdmin";
import { useEffect, useState } from "react";
import UI from "@/components/UI";
import { AdminEditUser } from "@/components/forms/Admin/AdminEditUser";
import {
  IAdminCreateUser,
  IAdminEditUser,
  IAdminUpdateUser,
} from "@/types/api";
import { IOptionSelect } from "@/types/general";

export function AdminPage() {
  const [usersAndRights, setUsersAndRights] = useState<Array<IUserAndRight>>(
    [],
  );
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editingUser, setEditingUser] = useState<null | IAdminEditUser>(null);
  const [selectsRights, setSelectsRights] = useState<Array<IOptionSelect>>([]);

  const fetchUsers = async () => {
    const data = await getUsersAndRights();
    if (data) setUsersAndRights(data);
  };

  const fetchRights = async () => {
    const dataRights = await getRights();
    setSelectsRights(
      dataRights.map(({ id, description }) => ({
        value: id,
        label: description,
      })),
    );
  };

  const createEntry = async (args: IAdminCreateUser) => {
    const response = await createUser(args);
    if (response) {
      await fetchUsers();
      setShowCreateForm(false);
    }
  };

  const updateEntry = async (args: IAdminUpdateUser) => {
    const response = await updateUser(args);
    if (response) {
      await fetchUsers();
      setShowEditForm(false);
    }
  };

  const deleteEntry = async (id: string) => {
    const response = await deleteUser(id);
    if (response) {
      await fetchUsers();
      setShowEditForm(false);
    }
  };

  const changeUser = async (id: string) => {
    const dataUser = await getUser(id);
    setEditingUser({ ...dataUser.user, role: dataUser.rights.id });
    await fetchRights();
    setShowEditForm(true);
  };

  const _showCreateForm = async () => {
    await fetchRights();
    setShowCreateForm(true);
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <div className="admin-page">
        <div className="admin-header">
          <div>
            <h1>Админ панель</h1>
          </div>
          <div>
            <button className="btn btn-outline-dark" onClick={_showCreateForm}>
              Создать
            </button>
          </div>
        </div>
        <div>
          {usersAndRights.map((entry) => (
            <div key={entry.user.id}>
              <AdminUserList entry={entry} change={(id) => changeUser(id)} />
            </div>
          ))}
        </div>
        <UI.MyModal show={showCreateForm}>
          <AdminCreateUser
            selectsRights={selectsRights}
            create={createEntry}
            setShow={(value) => setShowCreateForm(value)}
          />
        </UI.MyModal>
        <UI.MyModal show={showEditForm}>
          {editingUser ? (
            <AdminEditUser
              setShow={(value) => setShowEditForm(value)}
              entry={editingUser}
              selectsRights={selectsRights}
              updateEntry={updateEntry}
              deleteEntry={deleteEntry}
            />
          ) : (
            <></>
          )}
        </UI.MyModal>
      </div>
    </>
  );
}
