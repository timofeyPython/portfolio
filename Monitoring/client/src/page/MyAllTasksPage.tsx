import { useAppSelector } from "@store/hooks";
import { selectUser } from "@store/selectors";
import { Task } from "@forms/Task/Task";

export function MyAllTasksPage() {
  const user = useAppSelector(selectUser);

  return (
    <Task
      grId={""}
      id={user.info.id}
      name={user.info.name}
      title={`Все мои работы`}
      createdUserId={user.info.id}
      createdUserName={user.info.name}
    />
  );
}
