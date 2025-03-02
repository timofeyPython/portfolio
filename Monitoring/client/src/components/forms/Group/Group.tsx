import "./group.scss";
import { useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";
import { clientAPI } from "@/services/utils/clientApi";
import { TGroup } from "./type";
import { selectUser } from "@/store/selectors";
import { Link } from "react-router-dom";

export function Group() {
  const [data, setData] = useState<TGroup>({});

  const selectorUser = useAppSelector(selectUser);

  useEffect(() => {
    if (selectorUser.info.grId) {
      const api = clientAPI({
        method: "GET",
        path: `groups/${selectorUser.info.grId}`,
      });

      const fetchData = async () => {
        const group = await api();
        setData(group);
      };
      fetchData();
    }
  }, [selectorUser.info.grId]);

  return (
    <div className="group">
      <div className="titleGroup">
        <h1>Мой отдел</h1>
      </div>
      <hr />
      <div>
        {data.group ? (
          <div>
            <div>{data.group.name}</div>
            {data.group.users ? (
              <ol className="list-group list-group-numbered">
                {data.group.users.map((user) => (
                  <Link to={`/tasks/${user.id}`} key={user.id}>
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">{user?.info?.title}</div>
                        {user.name}
                      </div>
                      <span className="badge bg-primary rounded-pill">
                        {user?.tasks?.active}
                      </span>
                    </li>
                  </Link>
                ))}
              </ol>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
