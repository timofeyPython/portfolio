import "./styles/admin-user-list.scss";
import { IAdminUserList } from "./types/types.props";

export function AdminUserList({ entry, change }: IAdminUserList) {
  return (
    <>
      <div className="admin-user-list" onClick={() => change(entry.user.id)}>
        <div>
          <strong>Логин: </strong>
          <span>{entry.user.login}</span>
        </div>
        <div>
          <strong>ФИО: </strong>
          <span>{entry.user.name}</span>
        </div>
        <div>
          <strong>Права: </strong>
          <span>{entry.rights.role}</span>
        </div>
      </div>
    </>
  );
}
