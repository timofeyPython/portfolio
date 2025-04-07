import "./styles/edit-group.scss";
import { IInvatedUsers } from "./types/types";
import { useState } from "react";
import { IOptionSelect } from "@/types/general";
import { toast } from "react-toastify";
import { DataForm } from "./DataForm";
import { DataListsInvated } from "./DataListsInvated";
import { checkValues } from "@/services/utils/halper";
import { IEditGroupProps } from "./types/props.types";

export function EditGroup({
  setShow,
  data,
  updateEntry,
  deleteEntry,
  userLists,
  rightsLists,
}: IEditGroupProps) {
  const [invatedUsers, setInvateUsers] = useState<Array<IInvatedUsers>>(
    data.invatedUsers,
  );
  const [shortNameGroup, setShortNameGroup] = useState(data.entry.name);
  const [nameGroup, setNameGroup] = useState(data.entry.nameFull);
  const [description, setDescription] = useState(data.entry.description);
  const [selectRightId, setSelecteRightId] = useState("");
  const [selectUser, setSelectUser] = useState<IOptionSelect | null>(null);

  const updateGroup = (id: string) => {
    const check = checkValues([
      {
        value: shortNameGroup,
        description: "Задайте имя группе!",
      },
      {
        value: nameGroup,
        description: "Задайте полное имя группе!",
      },
      {
        value: description,
        description: "Задайте описание имя группе!",
      },
    ]);

    if (check.result) {
      updateEntry({
        id,
        shortNameGroup,
        nameGroup,
        description,
        invatedUsers,
      });
    } else {
      check.message.forEach((message) => toast.error(message));
    }
  };

  return (
    <>
      <DataForm
        title="Форма редактирования группы"
        setName={(val) => setShortNameGroup(val)}
        setFullName={(val) => setNameGroup(val)}
        setDescription={(val) => setDescription(val)}
        value1={shortNameGroup}
        value2={nameGroup}
        value3={description}
      />
      <DataListsInvated
        users={userLists}
        rights={rightsLists}
        onChangeRight={setSelecteRightId}
        onChangeUser={setSelectUser}
        setInvatedUser={setInvateUsers}
        selectRightId={selectRightId}
        selectUser={selectUser}
        invatedUsers={invatedUsers}
      />
      <div className="buttons">
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={() => updateGroup(data.entry.id)}
        >
          Сохранить
        </button>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => deleteEntry(data.entry.id)}
        >
          Удалить
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => setShow(false)}
        >
          Закрыть
        </button>
      </div>
    </>
  );
}
