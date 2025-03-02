import { Link } from "react-router-dom";
import { transcription } from "@services/utils/halper";
import { useAppSelector } from "@store/hooks";
import { selectUser } from "@store/selectors";

export function Main() {
  const user = useAppSelector(selectUser);
  return (
    <>
      <div className="main">
        <h1 className="display-6">Главная страница приложения Monitoring</h1>
        <hr />
        <p className="lead">
          Данное приложение предназначено для автоматизации процессов внутри
          отдела, при работе с текущими задачами, в данном приложении возможна
          полная корректировка назначенной задачи, выгрузка отчётов за нужный
          периоды.
        </p>
        <br />
        <div>
          <p className="lead">Вам доступны следующие элементы управления</p>
          <div>
            <ul>
              {user?.info?.roles &&
                user?.info?.roles.map((role) => (
                  <li key={role}>
                    <Link to={`/${transcription(role).link}`}>
                      {transcription(role).name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
