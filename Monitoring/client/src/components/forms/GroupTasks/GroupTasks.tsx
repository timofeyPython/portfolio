import UI from "@/components/UI/index";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { clientAPI } from "@/services/utils/clientApi";
import { ListsTasks } from "@/components/forms/MyTasks/ListsTask";
import { CreateTask } from "@/components/forms/MyTasks/CreateTask";

export function GroupTasks() {
  const params = useParams();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    const api = clientAPI({
      method: "GET",
      path: `users/${params.id}`,
    });
    const fetchData = async () => {
      const user = await api();
      setUser(user);
    };
    fetchData();
  }, [params.id]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1>Задачи сотрудника {user?.name ? user?.name : ""}</h1>
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={() => setShow(!show)}
        >
          Создать задачу
        </button>
      </div>
      <hr />
      {user && user?.grId ? (
        <>
          <ListsTasks userId={params.id ? params.id : ""} grId={user?.grId} />
          <UI.MyModal show={show}>
            <CreateTask
              setShow={setShow}
              grId={user.grId}
              userId={user.id}
              userName={user.name}
            />
          </UI.MyModal>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
