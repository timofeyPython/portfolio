import "./styles/group-lists.scss";
import { GroupList } from "./GroupList";
import { IGroupsListsProps } from "./types/props.types";

export function GroupsLists({ title, lists, change }: IGroupsListsProps) {
  return (
    <div>
      <h5>{title}</h5>
      <div className="groups-lists">
        {Array.isArray(lists) && lists.length > 0 ? (
          <div>
            {lists.map((list) => (
              <GroupList
                list={list}
                listsUser={list.participants}
                key={list.id}
                fn={change ? change : () => ""}
              />
            ))}
          </div>
        ) : (
          <div>Список групп пуст</div>
        )}
      </div>
    </div>
  );
}
