import Moment from "react-moment";
import UI from "@components/UI";
import moment from "moment";
import { useState, useRef } from "react";
import { statuses } from "@services/utils/constants";
import { History } from "./HistoryTask";
import { EditTask } from "./EditTask";
import { IData } from "./type";
import { CSSTransition } from "react-transition-group";
import { ListGroup } from "react-bootstrap";
import { transitionConfig } from "@/services/utils/constants";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectUser } from "@/store/selectors";

export function ListTask({ data, options, fnDispatch }: IData) {
  const [show, setShow] = useState(options?.show);
  const [showEdit, setShowEdit] = useState(false);
  const [id, setId] = useState<string>("");
  const [dateStart, setDateStart] = useState(
    new Date(moment().subtract(1, "year").startOf("year").format()),
  );
  const [dateEnd, setDateEnd] = useState(
    new Date(moment().endOf("year").format()),
  );
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const changeTask = (id: string) => {
    setId(id);
    setShowEdit(!showEdit);
  };
  const changeDate = (start: Date, end: Date, i = 0) => {
    dispatch(
      fnDispatch[i]({
        start,
        end: end,
        grId: options?.grId ? options?.grId : user.info.grId,
        userId: options?.userId ? options?.userId : user.info.id,
      }),
    );
    setDateEnd(end);
    setDateStart(start);
  };
  const nodeRef = useRef(null);
  const transConf = transitionConfig();

  return (
    <div
      className={
        options && options.className ? `task ${options.className}` : "task"
      }
    >
      <div className="title">
        <h1 className="display-6">
          {show ? options?.title : "Завершенные задачи"}
        </h1>
        <label className="checkbox-ios">
          <input
            type="checkbox"
            id="checkboxIOS"
            checked={show ? true : false}
            onClick={() => {
              if (show) {
                changeDate(dateStart, dateEnd, 1);
              } else {
                changeDate(dateStart, dateEnd);
              }
              setShow(!show);
            }}
          />
          <span className="checkbox-ios-switch"></span>
        </label>
      </div>
      <div>
        <CSSTransition
          nodeRef={nodeRef}
          in={true}
          timeout={transConf.duration}
          unmountOnExit
        >
          {(state) => (
            <div
              className="todo-list"
              style={{
                ...transConf.defaultStyle,
                ...transConf.transitionStyles[state],
              }}
            >
              <div>
                <div className="filter">
                  <div>
                    <h6>Фильтр по дате начала задания</h6>
                  </div>
                  <div className="datepicker">
                    <UI.MyDatepicker
                      id={`startDate${options?.className}`}
                      selected={dateStart}
                      onChange={(date) => changeDate(date, dateEnd)}
                      description={"С"}
                    />
                  </div>
                  <div className="datepicker">
                    <UI.MyDatepicker
                      id={`endDate${options?.className}`}
                      selected={dateEnd}
                      onChange={(date) => changeDate(dateStart, date)}
                      description={"По"}
                    />
                  </div>
                </div>
              </div>
              <div className="row row-cols-1 row-cols-md-4 mb-3">
                {data.length > 0 ? (
                  data.map(
                    (
                      { id, stage, name, description, startTask, taskCategory },
                      i,
                    ) => {
                      return (
                        <ListGroup key={id}>
                          <div
                            className="col"
                            onClick={(e) => {
                              const button = e.target as HTMLButtonElement;
                              if (button?.type === "button")
                                e.stopPropagation();
                              else if (stage.current.status !== "3")
                                changeTask(id);
                            }}
                          >
                            <div>
                              <div>
                                <strong>
                                  {i + 1}. {name}
                                </strong>
                              </div>
                              <div>
                                <strong>Категория : </strong>{" "}
                                {taskCategory?.name}
                              </div>
                              <div>
                                <strong>Описание : </strong> {description}
                              </div>
                              <div>
                                <strong>Старт : </strong>
                                <Moment format="DD-MM-YYYY">{startTask}</Moment>
                              </div>
                              <div>
                                <strong>Срок : </strong>
                                <Moment format="DD-MM-YYYY">
                                  {stage.deadline}
                                </Moment>
                              </div>
                              <div>
                                <strong>Статус : </strong>{" "}
                                {
                                  statuses.find(
                                    (status) =>
                                      status.value === stage?.current?.status,
                                  )?.htmlCode
                                }
                              </div>
                              {Array.isArray(stage?.history) &&
                              stage?.history.length > 0 ? (
                                <div>
                                  <strong>Причина изменения статуса : </strong>
                                  {stage?.current.description}
                                </div>
                              ) : (
                                ""
                              )}

                              <History
                                array={
                                  Array.isArray(stage?.history) &&
                                  stage?.history.length > 0
                                    ? stage.history
                                    : []
                                }
                              />
                            </div>
                          </div>
                        </ListGroup>
                      );
                    },
                  )
                ) : (
                  <div>Список пуст!</div>
                )}
              </div>
            </div>
          )}
        </CSSTransition>
      </div>
      <UI.MyModal show={showEdit}>
        <EditTask setShow={setShowEdit} selectId={id} />
      </UI.MyModal>
    </div>
  );
}
