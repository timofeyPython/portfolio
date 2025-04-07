import UI from "../../UI";
import "./styles/edit-task.scss";
import { useState } from "react";
import { toast } from "react-toastify";
import { statuses } from "@services/utils/constants";
import { DataFormTask } from "./DataFormTask";
import { IOptionSelect } from "@/types/general";
import { checkValues } from "@services/utils/halper";
import { ISelectTaskProps } from "./types/types.props";

export function EditTask({
  setShow,
  task,
  _selectsTC,
  _selectsTG,
  _deleteEntry,
  _updateEntry,
}: ISelectTaskProps) {
  const [taskName, setTaskName] = useState(task.name);
  const [taskCategory, setTaskCategory] = useState({
    value: task.taskCategory.id,
    label: task.taskCategory.name,
  });
  const [selectsTC, setSelectsTC] = useState<Array<IOptionSelect>>(_selectsTC);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState<string>(task.stage.current.status);
  const [statusDescription, setStatusDecription] = useState("");
  const [startDate, setStartDate] = useState(task.startTask);
  const [endDate, setEndDate] = useState(task.stage.deadline);
  const [taskGroup, setTaskGroup] = useState<null | IOptionSelect>(
    _selectsTG.find((tg) => tg.value === task.grId) || null,
  );

  const optionsUIStatus = {
    optionsSelect: statuses,
    label: "Выберите статус задачи",
  };

  function update() {
    const check = checkValues([
      {
        value: status === task?.stage?.current?.status || statusDescription,
        description: `Заполните поле "Описание причины изменения статуса`,
      },
      {
        value: taskName,
        description: `Заполните имя!`,
      },
      {
        value: description,
        description: "Заполните описание!",
      },
    ]);

    if (check.result) {
      _updateEntry({
        grId: taskGroup?.value || "",
        name: taskName,
        description,
        endDate,
        startDate,
        taskCategory: taskCategory.value,
        status,
        id: task.id,
        statusDescription,
      });
    } else {
      check.message.forEach((message) => toast.error(message));
    }
  }

  return (
    <>
      <div className="selectTask">
        <DataFormTask
          title={"Редактирование задачи"}
          onInput={setTaskName}
          onInput1={setDescription}
          selectsTC={selectsTC}
          taskCategory={taskCategory}
          setTaskCategory={setTaskCategory}
          setSelectsTC={setSelectsTC}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          value={taskName}
          value1={description}
          taskGroup={taskGroup}
          setTaskGroup={setTaskGroup}
          selectsTG={_selectsTG}
        >
          <div className="statusChange">
            <h6>Изменение статуса задачи</h6>
            <div className="mb-3">
              <UI.MySelect
                options={optionsUIStatus.optionsSelect.map((select) => ({
                  value: select.value,
                  label: select.description,
                }))}
                label={optionsUIStatus.label}
                selected={status}
                id="status"
                onChange={(el) => {
                  setStatus(`${el.target.value}`);
                  setStatusDecription("");
                }}
              />
            </div>
            {status != task?.stage.current.status ? (
              <div className="mb-3">
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="statusDecription"
                    style={{ height: 100 }}
                    value={statusDescription}
                    onInput={(e) => {
                      const val = e.target as HTMLButtonElement;
                      setStatusDecription(val.value);
                    }}
                  ></textarea>
                  <label htmlFor="statusDecription">
                    Описание причины изменения статуса:
                  </label>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </DataFormTask>
        <div className="buttons">
          <button className="btn btn-success" onClick={update}>
            Сохранить
          </button>
          {task?.stage.current.status !== "2" ? (
            <button
              className="btn btn-danger"
              onClick={() => _deleteEntry(task.id)}
            >
              Удалить
            </button>
          ) : (
            <></>
          )}
          <button className="btn btn-secondary" onClick={() => setShow(false)}>
            Выйти
          </button>
        </div>
      </div>
    </>
  );
}
