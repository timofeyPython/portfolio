import Moment from "react-moment";
import { useState } from "react";
import { ITasksStageHistory } from "@store/tasks/type";
import { statuses } from "@services/utils/constants";

export function History(el: { array: Array<ITasksStageHistory> }) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <strong>История:</strong>
      {Array.isArray(el.array) && el.array.length > 0 ? (
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={() => setShow(!show)}
        >
          {(show && "Скрыть") || "Показать"}
        </button>
      ) : (
        " Информация отсутствует"
      )}
      {show ? (
        <div className="task-history">
          {el.array.map((step, i) => {
            return (
              <div key={i}>
                {i > 0 && <hr />}
                <span>
                  <strong>Дата :</strong>{" "}
                  <Moment format="DD-MM-YYYY">{step.date}</Moment>
                </span>
                <br />
                <span>
                  <strong>Статус :</strong>{" "}
                  {
                    statuses.find((status) => status.value === step.status)
                      ?.description
                  }
                </span>
                <br />
                {step?.description && (
                  <span>
                    <strong>Описание:</strong> {step?.description}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
