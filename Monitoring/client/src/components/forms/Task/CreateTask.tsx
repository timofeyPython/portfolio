import UI from "@components/UI";
import "./styles/create-task.scss";
import { useState } from "react";
import { toast } from "react-toastify";
import { statuses } from "@services/utils/constants";
import { DataFormTask } from "./DataFormTask";
import { IOptionSelect } from "@/types/general";
import { checkValues } from "@services/utils/halper";
import { ICreateTaskProps } from "./types/types.props";

export function CreateTask({
  setShow,
  _selectsTC,
  _selectsTG,
  _taskGroup,
  _createEntry,
}: ICreateTaskProps) {
  const [task, setTask] = useState("");
  const [status, setStatus] = useState<string>("1");
  const [taskCategory, setTaskCategory] = useState<null | IOptionSelect>(null);
  const [description, setDescription] = useState("");
  const [endDate, setEndDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [selectsTC, setSelectsTC] = useState<Array<IOptionSelect>>(_selectsTC);
  const [taskGroup, setTaskGroup] = useState<null | IOptionSelect>(_taskGroup);

  const optionsUIStatus = {
    optionsSelect: statuses,
    label: "Выберите статус задачи",
  };

  const createEntry = () => {
    const check = checkValues([
      {
        value: taskGroup?.value,
        description: "выберите группу",
      },
      {
        value: description,
        description: "Введите задачу и описание задачи !",
      },
      {
        value: taskCategory?.value,
        description: "Выберите категорию задачи!",
      },
      {
        value: status,
        description: "выберите статус",
      },
    ]);
    if (check.result && taskGroup?.value && taskCategory?.value) {
      _createEntry({
        grId: taskGroup?.value,
        task,
        description,
        status,
        taskCategory: taskCategory.value,
        endDate,
        startDate,
      });
    } else {
      check.message.forEach((message) => toast.error(message));
    }
  };

  return (
    <>
      <DataFormTask
        title={"Форма создания задачи"}
        onInput={setTask}
        onInput1={setDescription}
        selectsTC={selectsTC}
        taskCategory={taskCategory}
        setTaskCategory={setTaskCategory}
        setSelectsTC={setSelectsTC}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        selectsTG={_selectsTG}
        taskGroup={taskGroup}
        setTaskGroup={setTaskGroup}
      >
        <div className="mb-3">
          <UI.MySelect
            id="status"
            options={optionsUIStatus.optionsSelect.map(
              ({ value, description }) => ({
                label: description,
                value: value,
              }),
            )}
            label={optionsUIStatus.label}
            selected={status}
            onChange={(el) => setStatus(`${el.target.value}`)}
          />
        </div>
      </DataFormTask>
      <div className="buttons">
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={() => createEntry()}
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
