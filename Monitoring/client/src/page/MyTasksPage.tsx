import UI from "@/components/UI/index";
import { useState } from "react";
import { useAppSelector } from "@/store/hooks";
import { selectUser } from "@/store/selectors";
import { ListsTasks } from "@/components/forms/MyTasks/ListsTask";
import { CreateTask } from "@/components/forms/MyTasks/CreateTask";

export function MyTasksPage() {
  const [show, setShow] = useState(false);
  const user = useAppSelector(selectUser);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1 className="display-6">Мои задачи</h1>
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={() => setShow(!show)}
        >
          Создать задачу
        </button>
      </div>

      <ListsTasks grId={user.info.grId} userId={user.info.id} />
      <UI.MyModal show={show}>
        <CreateTask
          setShow={setShow}
          grId={user.info.grId}
          userId={user.info.id}
          userName={user.info.name}
        />
      </UI.MyModal>
    </div>
  );
}
