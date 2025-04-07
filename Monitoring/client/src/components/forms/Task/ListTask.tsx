import "./styles/list-task.scss";
import { statuses } from "@services/utils/constants";
import { History } from "./HistoryTask";
import { ListGroup } from "react-bootstrap";
import Moment from "react-moment";
import { IListProps } from "./types/types.props";

export function ListTask({ entry, i, fn }: IListProps) {
  return (
    <>
      <ListGroup>
        <div
          className="col"
          onClick={(e) => {
            const button = e.target as HTMLButtonElement;
            if (button?.type === "button") e.stopPropagation();
            else if (entry.stage.current.status !== "3" && fn) fn(entry.id);
          }}
        >
          <div>
            <div>
              <strong>
                {i + 1}. {entry.name}
              </strong>
            </div>
            <div>
              <strong>Группа: </strong> {entry?.groups?.name}
            </div>
            <div>
              <strong>Категория : </strong> {entry.taskCategory?.name}
            </div>
            <div className="description">
              <strong>Описание : </strong> {entry.description}
            </div>
            <div>
              <strong>Старт : </strong>
              <Moment format="DD-MM-YYYY">{entry.startTask}</Moment>
            </div>
            <div>
              <strong>Срок : </strong>
              <Moment format="DD-MM-YYYY">{entry.stage.deadline}</Moment>
            </div>
            <div>
              <strong>Статус : </strong>{" "}
              {
                statuses.find(
                  (status) => status.value === entry.stage?.current?.status,
                )?.htmlCode
              }
            </div>
            {Array.isArray(entry?.stage?.history) &&
            entry?.stage?.history.length > 0 ? (
              <div>
                <strong>Причина изменения статуса : </strong>
                {entry?.stage?.current.description}
              </div>
            ) : (
              ""
            )}
            <History
              array={
                Array.isArray(entry?.stage?.history) &&
                entry?.stage?.history.length > 0
                  ? entry?.stage.history
                  : []
              }
            />
            <div>
              <strong>Назначено :</strong> {entry?.createdUser?.name}
            </div>
          </div>
        </div>
      </ListGroup>
    </>
  );
}
