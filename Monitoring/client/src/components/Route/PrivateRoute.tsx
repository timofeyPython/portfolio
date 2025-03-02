import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "@store/hooks";
import { selectUser } from "@store/selectors";

export const PrivateRoute = () => {
  const location = useLocation(); // получаем текущий маршрут с помощью хука useLocation()
  const user = useAppSelector(selectUser);

  return user.isAuth === true ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
