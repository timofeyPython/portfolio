import "./styles/create-group.scss";
import { IInvatedUsers } from "./types/types";
import { useState } from "react";
import { IOptionSelect } from "@/types/general";
import { toast } from "react-toastify";
import { DataForm } from "./DataForm";
import { DataListsInvated } from "./DataListsInvated";
import { checkValues } from "@services/utils/halper";
import { ICreateGroupProps } from "./types/props.types";

export function CreateGroup({
  setShow,
  userLists,
  rightsLists,
  createEntry,
}: ICreateGroupProps) {
  const [invatedUsers, setInvateUsers] = useState<Array<IInvatedUsers>>([]);
  const [shortNameGroup, setShortNameGroup] = useState("");
  const [nameGroup, setNameGroup] = useState("");
  const [description, setDescription] = useState("");
  const [selectRightId, setSelecteRightId] = useState("");
  const [selectUser, setSelectUser] = useState<IOptionSelect | null>(null);

  const createGroup = () => {
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
      createEntry({
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
        title="Форма создании группы"
        setName={(val) => setShortNameGroup(val)}
        setFullName={(val) => setNameGroup(val)}
        setDescription={(val) => setDescription(val)}
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
          onClick={createGroup}
        >
          Сохранить
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
