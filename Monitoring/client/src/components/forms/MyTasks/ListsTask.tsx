import "./task.scss";
import moment from "moment";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { getCurrentTasks, getsEndTasks } from "@store/tasks/actions";
import { selectTasks } from "@store/selectors";
import { ListTask } from "./ListTask";

export function ListsTasks({ grId, userId }: { grId: string; userId: string }) {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectTasks);

  useEffect(() => {
    if (grId && userId) {
      dispatch(
        getCurrentTasks({
          start: new Date(
            moment().subtract(1, "year").startOf("year").format(),
          ),
          end: new Date(moment().endOf("year").format()),
          userId: userId,
          grId: grId,
        }),
      );
    }
  }, [dispatch, grId, userId]);

  return (
    <div>
      <ul>
        <ListTask
          data={data.currentTask}
          options={{
            className: "active",
            title: "Активные задачи",
            show: true,
            grId,
            userId,
          }}
          fnDispatch={[getCurrentTasks, getsEndTasks]}
        />
        {/* <ListTask
          data={data.endTask}
          options={{
            className: "inactive",
            title: "Завершенные задачи",
            show: false,
            grId,
            userId,
          }}
          fnDispatch={getsEndTasks}
        /> */}
      </ul>
    </div>
  );
}
