import { useAppSelector } from "@store/hooks";
import { selectUser } from "@store/selectors";

export function RoleGuard({
  children,
  role,
}: {
  children: JSX.Element;
  role: string[];
}) {
  const user = useAppSelector(selectUser);

  if (role.includes(user.info.rights.user.role || "")) return children;
  return (
    <div>
      <h1>Нет прав для данной страницы</h1>
    </div>
  );
}
