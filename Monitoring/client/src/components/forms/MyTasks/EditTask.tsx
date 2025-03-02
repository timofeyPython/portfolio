import UI from "../../UI";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ISelectTask } from "./type";
import { clientAPI } from "@services/utils/clientApi";
import { statuses } from "@services/utils/constants";
import { useAppDispatch } from "@store/hooks";
import { ITasks, ITaskUpdate } from "@store/tasks/type";
import { deleteTask, updateTask } from "@store/tasks/actions";

export function EditTask({ setShow, selectId }: ISelectTask) {
  const [selectTask, setSelectTask] = useState<ITasks | null>(null);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<string>("");
  const [statusDescription, setStatusDecription] = useState("");
  const [endDate, setEndDate] = useState(new Date());
  const [taskCategoryName, setTaskCategoryName] = useState("");
  const dispatch = useAppDispatch();
  const optionsUIStatus = {
    optionsSelect: statuses,
    label: "Выберите статус задачи",
  };

  function update() {
    if (status != selectTask?.stage?.current?.status && !statusDescription) {
      toast.error(`заполните поле "Описание причины изменения статуса"`);
    } else {
      const entry: ITaskUpdate = {
        id: selectId,
        description: description,
        stage: {
          current: {
            date: new Date(),
            status: status,
            description: statusDescription,
          },
          deadline: endDate,
        },
      };
      dispatch(updateTask(entry));
      setShow(false);
    }
  }

  function deleteEntry(id: string) {
    dispatch(deleteTask(id));
    setShow(false);
  }

  useEffect(() => {
    const api = clientAPI({
      method: "GET",
      path: `tasks/${selectId}`,
    });

    const fetchData = async () => {
      const task: ITasks = await api();
      setSelectTask(task);
      setDescription(task.description);
      setStatus(task.stage.current.status);
      setEndDate(task.stage.deadline);
      setTaskCategoryName(task.taskCategory.name);
    };
    fetchData();
  }, [selectId]);

  return (
    <div className="selectTask">
      <div>
        <h4>Редактирование задачи</h4>
        <p>{selectTask?.name}</p>
      </div>
      <hr />
      <div>
        <div className="mb-3">
          <span>
            Порядковый номер: <strong> {selectTask?.number}</strong>
          </span>
        </div>
        <div className="mb-3">
          <span>
            Категория задачи: <strong>{taskCategoryName}</strong>
          </span>
        </div>
        <div className="mb-3">
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              id="description"
              style={{ height: 100 }}
              value={description}
              onInput={(e) => {
                const val = e.target as HTMLButtonElement;
                setDescription(val.value);
              }}
            ></textarea>
            <label htmlFor="description">Описание:</label>
          </div>
        </div>
        <div className="statusChange">
          <h6>Изменение статуса задачи</h6>
          <div className="mb-3">
            <UI.MySelect
              options={optionsUIStatus.optionsSelect}
              label={optionsUIStatus.label}
              selected={status}
              id="status"
              onChange={(el) => {
                setStatus(`${el.target.value}`);
                setStatusDecription("");
              }}
            />
          </div>
          {status != selectTask?.stage.current.status ? (
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
        <div className="mb-3">
          <h6>Изменение сроков задачи</h6>
          <UI.MyDatepicker
            id="startDateEditTask"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </div>
        <div className="buttons">
          <button className="btn btn-success" onClick={update}>
            Сохранить
          </button>
          {selectTask?.stage.current.status !== "2" ? (
            <button
              className="btn btn-danger"
              onClick={() => deleteEntry(selectId)}
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
    </div>
  );
}
