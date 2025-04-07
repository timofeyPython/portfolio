import "./styles/admin-create-form.scss";
import { useState } from "react";
import { AdminDataForm } from "./AdminDataForm";
import { checkValues } from "@services/utils/halper";
import { toast } from "react-toastify";
import { IAdminCreateUserProps } from "./types/types.props";

export function AdminCreateUser({
  setShow,
  create,
  selectsRights,
}: IAdminCreateUserProps) {
  const [login, setLogin] = useState("");
  const [name, setName] = useState("");
  const [selectRight, setSelectRight] = useState("");
  const [password, setPassword] = useState("");
  const disableAD = false;

  const createEntry = () => {
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
      create({
        login,
        name,
        password,
        role: selectRight,
      });
    } else {
      check.message.forEach((entry) => toast.error(entry));
    }
  };

  return (
    <>
      <div className="admin-create-form">
        <div>
          <h1>Создания записи</h1>
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
            {disableAD && (
              <div className="mb-3">
                <label className="form-label" htmlFor="password">
                  Временный пароль
                </label>
                <input
                  className="form-control"
                  id="password"
                  type="text"
                  value={password}
                  onInput={(event) => {
                    const target = event.target as HTMLButtonElement;
                    setPassword(target.value);
                  }}
                />
                <div id="password" className="form-text">
                  Временный пароль необязателен, пользователь может
                  <br />
                  входить по своему домменому пароль
                </div>
              </div>
            )}
            <div className="buttons">
              <div>
                <button
                  className="btn btn-outline-success"
                  onClick={createEntry}
                >
                  Создать
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
