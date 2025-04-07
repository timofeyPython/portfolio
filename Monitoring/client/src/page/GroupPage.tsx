import "./styles/group-page.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IGroupUser } from "@/components/forms/Group/types/types";
import { GroupUsers } from "@forms/Group/GroupUsers";
import { EApiPath } from "@/types/apiPath.enum";
import { ERouteParamId, ERoutePath } from "@/types/routePath.enum";
import { useAppSelector } from "@store/hooks";
import { selectUser } from "@store/selectors";
import { getGroupUser } from "@/services/api/apiGroups";

export function GroupPage() {
  const params = useParams();
  const [data, setData] = useState<IGroupUser | null>(null);
  const myInfo = useAppSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getGroupUser(
        `${EApiPath.GROUPS_PARTICIPANTS}/${params[ERouteParamId.GROUP_ID]}`,
      );
      setData(data);
    };
    fetchData();
  }, [params]);
  return (
    <>
      <div className="group-title">
        <div>
          <h1>Участники {data?.group?.name}</h1>
        </div>
        <div>
          <button
            className="btn btn-outline-dark"
            onClick={() => {
              navigate(`${ERoutePath.MY_TASKS}/${myInfo.info.id}`);
            }}
          >
            Перейти в мои задачи
          </button>
        </div>
      </div>
      {data && (
        <GroupUsers users={data.users} rights={myInfo.info.rights.group} />
      )}
    </>
  );
}
