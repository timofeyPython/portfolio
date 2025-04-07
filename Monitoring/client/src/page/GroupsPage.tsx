import { GroupsLists } from "@forms/Group/GroupLists";
import { IGroup } from "@/components/forms/Group/types/types";
import { useEffect, useState } from "react";
import { getGroupsInvated } from "@/services/api/apiGroups";

export function GroupsPage() {
  const [groups, setGroups] = useState<IGroup[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getGroupsInvated();
      setGroups(data);
    };

    fetchData();
  }, []);
  return (
    <>
      <div>
        <div>
          <div>
            <h1>Доступные группы</h1>
            <hr />
          </div>
        </div>
        <div>
          {groups && (
            <GroupsLists
              title="Предоставлен доступ к следующим группам"
              lists={groups}
            />
          )}
        </div>
      </div>
    </>
  );
}
