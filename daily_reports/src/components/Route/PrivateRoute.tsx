import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../services/hooks/useAuth';
// Компонент PrivateRoute используется для защиты определенных маршрутов в приложении.

export const PrivateRoute = () => {
    const { auth } = useAuth()// используем контекст для получения значения isAuthenticated
    const location = useLocation(); // получаем текущий маршрут с помощью хука useLocation()
  
    return (
      auth.isAuth === true ?
        <Outlet />
        :
        <Navigate to="/login" state={{ from: location }} replace />
    );
  }
