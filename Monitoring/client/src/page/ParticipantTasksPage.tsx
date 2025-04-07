import { IGroupList } from "@/components/forms/Group/types/types";
import { Task } from "@components/forms/Task/Task";
import { getGroupAndInvatedUsers } from "@services/api/apiGroups";
import { getUser } from "@services/api/apiUsers";
import { useAppSelector } from "@store/hooks";
import { selectUser } from "@store/selectors";
import { IGetUser } from "@/types/api";
import { ERouteParamId } from "@/types/routePath.enum";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function ParticipantTasksPage() {
  const params = useParams();
  const user = useAppSelector(selectUser);
  const [participant, setParticipant] = useState<IGetUser | null>(null);
  const userId = params[ERouteParamId.PATICIPANT_TASKS_ID] || "";
  const groupId = params[ERouteParamId.GROUP_ID] || "";

  const [group, setGroup] = useState<null | IGroupList>(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getGroupAndInvatedUsers(groupId);
      const participantData = await getUser(userId);
      setGroup(data.entry);
      setParticipant(participantData);
    };
    fetchData();
  }, [userId, groupId]);

  return userId && groupId && participant && group ? (
    <Task
      grId={groupId}
      id={userId}
      name={participant?.name}
      title={`${participant?.name} по группе ${group?.nameFull}`}
      createdUserId={user.info.id}
      createdUserName={user.info.name}
    />
  ) : (
    <></>
  );
}
