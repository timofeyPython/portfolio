import "./styles/lists-task.scss";
import UI from "@components/UI";
import moment from "moment";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { getTasks } from "@store/tasks/actions";
import { selectTasks } from "@store/selectors";
import { ListTask } from "./ListTask";
import { transitionConfig } from "@services/utils/constants";
import { CSSTransition } from "react-transition-group";
import { useRef } from "react";
import { IListsTaskProps } from "./types/types.props";

export function ListsTasks({ grId, userId, change }: IListsTaskProps) {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectTasks).tasks;
  const [active, setActive] = useState(true);
  const [dateStart, setDateStart] = useState(
    new Date(moment().subtract(1, "year").startOf("year").format()),
  );
  const [dateEnd, setDateEnd] = useState(
    new Date(moment().endOf("year").format()),
  );

  const changeDate = (
    show: boolean,
    start: Date,
    end: Date,
    grId: string,
    userId: string,
  ) => {
    dispatch(
      getTasks({
        start,
        end,
        grId,
        userId,
        active: `${show}`,
      }),
    );
    setDateEnd(end);
    setDateStart(start);
  };
  const nodeRef = useRef(null);
  const transConf = transitionConfig();

  useEffect(() => {
    if (userId) {
      dispatch(
        getTasks({
          start: new Date(
            moment().subtract(1, "year").startOf("year").format(),
          ),
          end: new Date(moment().endOf("year").format()),
          userId: userId,
          grId: grId,
          active: `${active}`,
        }),
      );
    }
  }, [active, dispatch, grId, userId]);

  return (
    <div>
      <div className="title">
        <h1 className="display-6">{active ? "активные" : "завершенные"}</h1>
      </div>
      <div>
        <div>
          <div className="filter">
            <div>
              <div>
                <h6>Фильтр по дате начала задания</h6>
              </div>
              <div className="datepicker">
                <UI.MyDatepicker
                  id={`startDateactive`}
                  selected={dateStart}
                  onChange={(date) =>
                    changeDate(active, date, dateEnd, grId, userId)
                  }
                  description={"С"}
                />
              </div>
              <div className="datepicker">
                <UI.MyDatepicker
                  id={`endDateactive`}
                  selected={dateEnd}
                  onChange={(date) =>
                    changeDate(active, dateStart, date, grId, userId)
                  }
                  description={"По"}
                />
              </div>
              <div></div>
            </div>
            <div style={{ textAlign: "center" }}>
              <p> Выбор заданий</p>
              <label className="checkbox-ios">
                <input
                  type="checkbox"
                  id="checkboxIOS"
                  checked={active ? true : false}
                  onChange={() => {
                    changeDate(!active, dateStart, dateEnd, grId, userId);
                    setActive(!active);
                  }}
                />
                <span className="checkbox-ios-switch"></span>
              </label>
            </div>
          </div>
        </div>
        <div className="task active">
          <CSSTransition
            nodeRef={nodeRef}
            in={true}
            timeout={transConf.duration}
            unmountOnExit
          >
            <div className="row row-cols-1 row-cols-md-4 mb-3">
              {Array.isArray(data) && data.length > 0 ? (
                data.map((el, i) => (
                  <ListTask key={el.id} entry={el} i={i} fn={change} />
                ))
              ) : (
                <div>Список пуст!</div>
              )}
            </div>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
}
