import UI from "@components/UI";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { statuses } from "@services/utils/constants";
import { useAppDispatch } from "@store/hooks";
import { createTask } from "@store/tasks/actions";
import { clientAPI } from "@/services/utils/clientApi";
import { CreateCategoryTask } from "./CreateCategoryTask";

export function CreateTask({
  setShow,
  grId,
  userId,
  userName,
}: {
  setShow: (show: boolean) => void;
  grId: string;
  userId: string;
  userName: string;
}) {
  const [task, setTask] = useState("");
  const [status, setStatus] = useState<string | null>("1");
  const [taskCategory, setTaskCategory] = useState<null | {
    value: string;
    label: string;
  }>(null);
  const [description, setDescription] = useState("");
  const [endDate, setEndDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [selectsTC, setSelectsTC] = useState<
    Array<{ value: string; label: string }>
  >([]);
  const [showCreateTC, setShowCreateTC] = useState(false);
  const dispatch = useAppDispatch();
  const optionsUIStatus = {
    optionsSelect: statuses,
    label: "Выберите статус задачи",
  };

  const createEntry = () => {
    if (task && description && status && taskCategory) {
      dispatch(
        createTask({
          name: task,
          description,
          createdUser: {
            name: userName,
            id: userId,
          },
          assigned: {
            name: userName,
            id: userId,
          },
          stage: {
            current: {
              date: new Date(),
              status: status,
              description: "",
            },
            deadline: endDate,
          },
          startTask: startDate,
          endTask: endDate,
          grId: grId,
          taskCategoryId: taskCategory.value,
        }),
      );
      setShow(false);
    } else {
      if (!description) toast.error("Введите задачу и описание задачи !");
      if (!taskCategory) toast.error("Выберите категорию задачи!");
    }
  };

  useEffect(() => {
    const api = clientAPI({
      method: "GET",
      path: "taskcategory",
    });
    const fetchData = async () => {
      const data = await api();
      setSelectsTC(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <form className="createTask">
        <h1>Форма создания задачи</h1>
        <hr />
        <div className="mb-3">
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              id="task"
              style={{ height: 100 }}
              onInput={(e) => {
                const val = e.target as HTMLButtonElement;
                setTask(val.value);
              }}
            ></textarea>
            <label htmlFor="task">Задача:</label>
          </div>
        </div>
        <div className="mb-3">
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              id="description"
              style={{ height: 100 }}
              onInput={(e) => {
                const val = e.target as HTMLButtonElement;
                setDescription(val.value);
              }}
            ></textarea>
            <label htmlFor="description">Описание:</label>
          </div>
        </div>
        <div className="mb-3">
          <UI.mySelectInput
            options={selectsTC}
            defaultValue={taskCategory}
            onChange={setTaskCategory}
            placeholder={"Выберите категорию задачи"}
          />
          <span className="form-text">
            Если нужной категории нет, то нажмите на
            <span
              style={{ cursor: "pointer" }}
              onClick={() => setShowCreateTC(!showCreateTC)}
            >
              &#128190;
            </span>
          </span>
        </div>
        <div className="mb-3">
          <UI.MySelect
            id="status"
            options={optionsUIStatus.optionsSelect}
            label={optionsUIStatus.label}
            selected={status}
            onChange={(el) => setStatus(`${el.target.value}`)}
          />
        </div>
        <div className="mb-3">
          <div className="col-auto">
            <UI.MyDatepicker
              id="startDateCreateTask"
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                setEndDate(date);
              }}
              description="Старт задания:"
            />
          </div>
        </div>
        <div className="mb-3">
          <div className="col-auto">
            <UI.MyDatepicker
              id="endDate"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              description="Срок выполнения:"
            />
          </div>
          <div className="col-auto">
            <span className="form-text">Возможно перенести после создания</span>
          </div>
        </div>
        <hr />
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
        <UI.MyModal show={showCreateTC}>
          <CreateCategoryTask
            setShow={setShowCreateTC}
            show={showCreateTC}
            setSelectsTC={setSelectsTC}
            selectsTC={selectsTC}
          />
        </UI.MyModal>
      </form>
    </>
  );
}
