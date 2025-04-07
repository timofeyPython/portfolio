import { Link } from "react-router-dom";
import "./styles/group-list.scss";
import { ERoutePath } from "@/types/routePath.enum";
import { IGroupListProps } from "./types/props.types";

export function GroupList({ list, listsUser, fn }: IGroupListProps) {
  return (
    <>
      <div
        key={list.id}
        className="group-list target"
        onClick={() => fn(list.id)}
      >
        {/* <div>
          <img src="" alt="avatar" />
        </div> */}
        <div>
          <div>
            <strong>Название: </strong>
            {list.name}
          </div>
          <div>
            <strong>Полное имя:</strong> {list.nameFull}
          </div>
          <div>
            <strong>Описание: </strong>
            {list.description}
          </div>
          <div>
            <strong>Участники: </strong>
            <ul>
              {Array.isArray(listsUser) &&
                listsUser.map((user) => <li key={user.id}>{user.name}</li>)}
            </ul>
          </div>
          <div>
            &#128640;
            <Link to={`/${ERoutePath.GROUP}/${list.id}/`}>К составу</Link>
          </div>
        </div>
      </div>
    </>
  );
}
