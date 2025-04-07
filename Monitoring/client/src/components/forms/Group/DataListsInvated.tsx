import UI from "@components/UI";
import { toast } from "react-toastify";
import { IDataListsInvatedProps } from "./types/props.types";

export function DataListsInvated({
  users,
  rights,
  selectRightId,
  invatedUsers,
  selectUser,
  onChangeUser,
  onChangeRight,
  setInvatedUser,
}: IDataListsInvatedProps) {
  const addUserAndRigth = () => {
    const findEntry = invatedUsers.find(
      ({ userId }) => userId === selectUser?.value,
    );

    if (findEntry) return toast.error("Уже добавлен!");

    if (!findEntry && selectUser && selectRightId) {
      setInvatedUser([
        ...invatedUsers,
        {
          userId: selectUser?.value,
          rightId: selectRightId,
          description: selectUser?.label,
        },
      ]);
    } else {
      return toast.error("Выберите участника и права!");
    }
  };

  const deleteUser = (id: string) => {
    setInvatedUser(invatedUsers.filter(({ userId }) => userId != id));
    toast.success("Участник удалён");
  };

  return (
    <>
      <div className="participants">
        <h5>Формирование участников группы</h5>
        <UI.mySelectInput
          options={users}
          onChange={(val) => onChangeUser(val)}
          placeholder={"Выберите участников группы"}
        />
        <UI.MySelect
          options={rights}
          id="rightId"
          label="Выберите права"
          selected={selectRightId}
          onChange={(el) => onChangeRight(`${el.target.value}`)}
        />
        <div style={{ textAlign: "end" }}>
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={() => {
              event?.preventDefault();
              addUserAndRigth();
            }}
          >
            Добавить
          </button>
        </div>
        <div>Списки участников</div>
        <div className="invate-lists">
          <div>
            {invatedUsers.length > 0 ? (
              invatedUsers.map((user) => (
                <div key={user.userId} className="invate-list">
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteUser(user.userId)}
                  >
                    ❌{user.description} {"| "}
                    {
                      rights.find((right) => right.value === user.rightId)
                        ?.label
                    }
                  </div>
                </div>
              ))
            ) : (
              <div> Нет приглашенных </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
