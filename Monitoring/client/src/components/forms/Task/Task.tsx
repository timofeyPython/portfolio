import UI from "@/components/UI/index";
import { useState } from "react";
import { ListsTasks } from "@components/forms/Task/ListsTask";
import { CreateTask } from "@components/forms/Task/CreateTask";
import { EditTask } from "@components/forms/Task/EditTask";
import { IFnCreateEntry, IFnUpdateEntry } from "./types/type";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectTasks } from "@/store/selectors";
import {
  clearTask,
  deleteTask,
  getTask,
  updateTask,
} from "@/store/tasks/actions";
import { IOptionSelect } from "@/types/general";
import { getTasksCategory } from "@/services/api/apiTasks";
import { getGroupsInvated } from "@/services/api/apiGroups";
import { createTask } from "@store/tasks/actions";
import { ITaskProps } from "./types/types.props";

export function Task({
  grId,
  id,
  name,
  title,
  createdUserId,
  createdUserName,
}: ITaskProps) {
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selectsTC, setSelectsTC] = useState<Array<IOptionSelect>>([]);
  const [selectsTG, setSelectsTG] = useState<Array<IOptionSelect>>([]);
  const [taskGroup, setTaskGroup] = useState<null | IOptionSelect>(null);
  const dispatch = useAppDispatch();
  const selectTask = useAppSelector(selectTasks).selectTask;

  const fetchOptions = async () => {
    const tasksCategory = await getTasksCategory();
    const groupInvated: Array<{ id: string; name: string }> =
      await getGroupsInvated();
    const formatSelectsTG = groupInvated.map(({ name, id }) => ({
      label: name,
      value: id,
    }));
    const findSelectTs = formatSelectsTG.find((tg) => tg.value === grId);
    if (findSelectTs) setTaskGroup(findSelectTs);
    setSelectsTG(formatSelectsTG);
    setSelectsTC(tasksCategory);
  };

  const showCreateForm = async () => {
    await fetchOptions();
    setShow(!show);
  };

  const showEditForm = async () => {
    await fetchOptions();
    setShowEdit(!showEdit);
  };

  // Создание
  const createEntry = ({
    grId,
    task,
    description,
    endDate,
    startDate,
    taskCategory,
    status,
  }: IFnCreateEntry) => {
    dispatch(
      createTask({
        name: task,
        description,
        createdUser: {
          name: createdUserName,
          id: createdUserId,
        },
        assigned: {
          name,
          id,
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
        grId,
        taskCategoryId: taskCategory,
      }),
    );
    dispatch(clearTask);
    setShow(false);
  };

  // Обновление
  const updateEntry = ({
    grId,
    name,
    description,
    endDate,
    startDate,
    taskCategory,
    status,
    id,
    statusDescription,
  }: IFnUpdateEntry) => {
    const entry = {
      id,
      name,
      grId,
      taskCategoryId: taskCategory,
      description,
      stage: {
        current: {
          date: new Date(),
          status: status,
          description: statusDescription,
        },
        deadline: endDate,
      },
      startTask: startDate,
      endTask: endDate,
    };
    dispatch(updateTask(entry));
    setShowEdit(!showEdit);
  };

  // Удаление
  const deleteEntry = (id: string) => {
    dispatch(deleteTask(id));
    setShowEdit(!showEdit);
  };

  const changeTask = async (id: string) => {
    dispatch(getTask(id));
    await showEditForm();
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1 className="display-6">{title}</h1>
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={() => showCreateForm()}
        >
          Создать задачу
        </button>
      </div>

      <ListsTasks grId={grId} userId={id} change={changeTask} />
      <UI.MyModal show={show}>
        <CreateTask
          setShow={showCreateForm}
          _selectsTC={selectsTC}
          _selectsTG={selectsTG}
          _taskGroup={taskGroup}
          _createEntry={createEntry}
        />
      </UI.MyModal>
      <UI.MyModal show={showEdit}>
        {selectTask ? (
          <EditTask
            setShow={setShowEdit}
            // dispatch(clearTask());
            _selectsTC={selectsTC}
            _selectsTG={selectsTG}
            _taskGroup={taskGroup}
            _deleteEntry={deleteEntry}
            _updateEntry={updateEntry}
            task={selectTask}
          />
        ) : (
          <></>
        )}
      </UI.MyModal>
    </div>
  );
}
