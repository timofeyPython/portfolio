import { useState } from "react";
import { AdminDataForm } from "./AdminDataForm";
import { checkValues } from "@services/utils/halper";
import { toast } from "react-toastify";
import { IAdminEditUserProps } from "./types/types.props";

export function AdminEditUser({
  setShow,
  updateEntry,
  deleteEntry,
  entry,
  selectsRights,
}: IAdminEditUserProps) {
  const [login, setLogin] = useState(entry.login);
  const [name, setName] = useState(entry.name);
  const [selectRight, setSelectRight] = useState(entry.role);

  const _updateEntry = () => {
    const check = checkValues([
      {
        value: login,
        description: "Введите логин",
      },
      {
        value: name,
        description: "Введите имя",
      },
      {
        value: selectRight,
        description: "Выберите права",
      },
    ]);
    if (check.result) {
      updateEntry({
        login,
        name,
        role: selectRight,
        id: entry.id,
      });
    } else {
      check.message.forEach((entry) => toast.error(entry));
    }
  };

  return (
    <>
      <div className="admin-edit-form">
        <div>
          <h1>Редактирование записи</h1>
        </div>
        <AdminDataForm
          data={{
            form1: {
              label: "Логин",
              id: "loginId",
              value: login,
              onInput: setLogin,
            },
            form2: {
              label: "Имя пользователя",
              id: "nameId",
              value: name,
              onInput: setName,
            },
            form3: {
              label: "Выбор прав",
              options: selectsRights,
              id: "selectRights",
              onChange: (val) => setSelectRight(val),
              select: selectRight,
            },
          }}
        >
          <div>
            <div className="buttons">
              <div>
                <button
                  className="btn btn-outline-success"
                  onClick={_updateEntry}
                >
                  Обновить
                </button>
              </div>
              <div>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteEntry(entry.id)}
                >
                  Удалить
                </button>
              </div>
              <div>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => setShow(false)}
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        </AdminDataForm>
      </div>
    </>
  );
}
