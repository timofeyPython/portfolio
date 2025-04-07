import UI from "@components/UI";
import { useState } from "react";
import { CreateCategoryTask } from "./CreateCategoryTask";
import { IDataFormTaskProps } from "./types/types.props";

export function DataFormTask({
  title,
  onInput,
  onInput1,
  value,
  value1,
  taskCategory,
  setTaskCategory,
  selectsTC,
  setSelectsTC,
  startDate,
  setStartDate,
  setEndDate,
  endDate,
  children,
  selectsTG,
  taskGroup,
  setTaskGroup,
}: IDataFormTaskProps) {
  const [showCreateTC, setShowCreateTC] = useState(false);
  return (
    <>
      <form className="createTask">
        <div>
          <h1>{title}</h1>
        </div>
        <div className="mb-3">
          <UI.mySelectInput
            options={selectsTG}
            defaultValue={taskGroup}
            onChange={setTaskGroup}
            placeholder={"Выберите группу"}
          />
        </div>
        <UI.MyFormMb3
          id="task"
          labelName="Задача"
          onInput={onInput}
          value={value}
        />
        <UI.MyFormMb3
          id="description"
          labelName="Описание"
          onInput={onInput1}
          value={value1}
        />
        <div className="mb-3">
          <UI.mySelectInput
            options={selectsTC}
            defaultValue={taskCategory}
            onChange={setTaskCategory}
            placeholder={"Выберите категорию задачи"}
          />
          <span className="form-text">
            Если нужной категории нет, то нажмите на
            <span
              style={{ cursor: "pointer" }}
              onClick={() => setShowCreateTC(!showCreateTC)}
            >
              &#128190;
            </span>
          </span>
        </div>
        {children}
        <div className="mb-3">
          <div className="col-auto">
            <UI.MyDatepicker
              id="startDateCreateTask"
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                setEndDate(date);
              }}
              description="Старт задания:"
            />
          </div>
        </div>
        <div className="mb-3">
          <div className="col-auto">
            <UI.MyDatepicker
              id="endDate"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              description="Срок выполнения:"
            />
          </div>
          <div className="col-auto">
            <span className="form-text">Возможно перенести после создания</span>
          </div>
        </div>
        <UI.MyModal show={showCreateTC}>
          <CreateCategoryTask
            setShow={setShowCreateTC}
            show={showCreateTC}
            setSelectsTC={setSelectsTC}
            selectsTC={selectsTC}
          />
        </UI.MyModal>
      </form>
    </>
  );
}
