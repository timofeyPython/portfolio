import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ListTask } from "@forms/Task/ListTask";
import { ERouteParamId } from "@/types/routePath.enum";
import { ITask } from "@store/tasks/type";
import { getUser } from "@services/api/apiUsers";
import { IGetUser } from "@/types/api";
import { IGroupEntry } from "@components/forms/Group/types/types";
import { getTasks } from "@services/api/apiTasks";
import { getGroup } from "@services/api/apiGroups";

export function ParticipantPage() {
  const [user, setUser] = useState<IGetUser | null>(null);
  const [tasks, setTasks] = useState<Array<ITask>>([]);
  const [group, setGroup] = useState<null | IGroupEntry>(null);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const user = await getUser(`${params[ERouteParamId.PARTICIPANT_ID]}`);
      if (
        params[ERouteParamId.PARTICIPANT_ID] &&
        params[ERouteParamId.GROUP_ID]
      ) {
        const dataTasks = await getTasks(
          params[ERouteParamId.PARTICIPANT_ID],
          params[ERouteParamId.GROUP_ID],
          true,
        );
        const dataGroup = await getGroup(params[ERouteParamId.GROUP_ID]);
        setGroup(dataGroup.entry);
        if (dataTasks) setTasks(dataTasks);
      }

      if (user) setUser(user);
    };
    fetchData();
  }, [params]);
  return (
    <>
      <div>
        <div>
          <h1>{group && group?.nameFull}</h1>
          <h3>Задачи сотрудника {user?.name}</h3>
        </div>
        <div>
          {tasks.length > 0 ? (
            tasks.map((task, i) => (
              <div key={task.id}>
                <ListTask entry={task} i={i} />
              </div>
            ))
          ) : (
            <div>Список задач пуст !</div>
          )}
        </div>
      </div>
    </>
  );
}
