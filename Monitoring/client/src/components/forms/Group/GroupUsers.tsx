import { GroupUser } from "@components/forms/Group/GroupUser";
import { Link, useParams } from "react-router-dom";
import { ERouteParamId, ERoutePath } from "@/types/routePath.enum";
import { EUserRightsGroups } from "@/types/general";
import { IGroupUsersProps } from "./types/props.types";

export function GroupUsers({ users, rights }: IGroupUsersProps) {
  const params = useParams();
  const checkRight = rights.find(
    (right) => right.groupId === params[ERouteParamId.GROUP_ID],
  );
  return (
    <>
      {Array.isArray(users) && users.length > 0 ? (
        users.map((entry) => (
          <div key={entry.id}>
            <GroupUser entry={entry}>
              {checkRight?.rightName === EUserRightsGroups.PRIVILEGED ? (
                <div>
                  🔥
                  <Link to={`${ERoutePath.PATICIPANT_TASKS}/${entry.user.id}`}>
                    Назначить задание
                  </Link>
                </div>
              ) : (
                <></>
              )}
            </GroupUser>
          </div>
        ))
      ) : (
        <div>Нет участников</div>
      )}
    </>
  );
}
