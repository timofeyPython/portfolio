import "./autheciate.scss";
import { useCallback, useState } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { logIn } from "@services/utils/api";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { selectUser } from "@store/selectors";
import { updateAuth } from "@/store/user/actions";

export function Autheciate() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const user = useAppSelector(selectUser);
  const dispath = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { handleSubmit } = useForm();
  const from = location.state?.from?.pathname || "/main";

  const handleFormChange = useCallback<
    React.ChangeEventHandler<HTMLInputElement>
  >(
    (event) => {
      if (event.target.id === "login") setLogin(event.currentTarget.value);
      else setPassword(event.currentTarget.value);
    },
    [setLogin, setPassword],
  );

  const clickAuth = async () => {
    const request = await logIn(login, password);
    if (request) {
      dispath(updateAuth());
      window.location.reload();
      navigate(from, { replace: true });
    }
  };

  return user.isAuth ? (
    <Navigate to="/main" replace />
  ) : (
    <div className="page">
      <div className="content">
        <form onSubmit={handleSubmit(() => clickAuth())}>
          <h3>Страница авторизации</h3>
          <div className="block">
            <label htmlFor="login" className="form-label">
              Логин:
            </label>
            <input
              type="text"
              id="login"
              value={login}
              onChange={handleFormChange}
              autoComplete="username"
              className="form-control"
              required
            />
          </div>
          <div className="block">
            <label htmlFor="password" className="form-label">
              Пароль:
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={handleFormChange}
              autoComplete="current-password"
              className="form-control"
              required
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <button type="submit" className="btn btn-outline-primary">
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
