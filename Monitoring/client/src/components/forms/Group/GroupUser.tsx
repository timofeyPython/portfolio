import "./styles/group-user.scss";
import { ERoutePath } from "@/types/routePath.enum";
import { IGroupUserProps } from "./types/props.types";

export function GroupUser({ entry, children }: IGroupUserProps) {
  return (
    <>
      <div className="group-user">
        <div>
          <strong>Участник</strong>: {entry.user.name}
        </div>
        <div>
          <strong>Роль: </strong>
          {entry.right}
        </div>
        <div>
          <strong>Список активных задач</strong>: {entry.tasks.active}
        </div>
        <div>
          🧾
          <a href={`${ERoutePath.PARTICIPANT}/${entry.user.id}`}>
            Посмотреть задачи
          </a>
        </div>
        {children}
      </div>
    </>
  );
}
