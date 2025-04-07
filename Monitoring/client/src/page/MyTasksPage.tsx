import { useAppSelector } from "@store/hooks";
import { selectUser } from "@store/selectors";
import { Task } from "@forms/Task/Task";
import { useParams } from "react-router-dom";
import { ERouteParamId } from "@/types/routePath.enum";
import { useEffect, useState } from "react";
import { IGroupList } from "@/components/forms/Group/types/types";
import { getGroup } from "@services/api/apiGroups";

export function MyTasksPage() {
  const user = useAppSelector(selectUser);
  const params = useParams();
  const [nameGroup, setNameGroup] = useState<null | IGroupList>(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getGroup(`${params[ERouteParamId.GROUP_ID]}`);
      setNameGroup(data.entry);
    };
    fetchData();
  }, [params]);
  return params[ERouteParamId.GROUP_ID] ? (
    <Task
      grId={params[ERouteParamId.GROUP_ID]}
      id={user.info.id}
      name={user.info.name}
      title={`Мои работы по группе ${nameGroup?.nameFull}`}
      createdUserId={user.info.id}
      createdUserName={user.info.name}
    />
  ) : (
    <></>
  );
}
