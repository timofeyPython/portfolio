import { useState } from "react";
import { toast } from "react-toastify";
import { ICreateCategoryTaskProps } from "./types/types.props";
import { createTaskCategory } from "@/services/api/apiTasks";

export function CreateCategoryTask({
  setShow,
  show,
  setSelectsTC,
  selectsTC,
}: ICreateCategoryTaskProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const create = async () => {
    if (name && description) {
      const data = await createTaskCategory({ name, description });
      setSelectsTC([
        ...selectsTC,
        {
          value: data.entry.id,
          label: data.entry.name,
        },
      ]);
      setShow(!show);
    } else {
      toast.error("Заполните имя и описание !");
    }
  };
  return (
    <div style={{ padding: "2.5%", minWidth: "500px" }}>
      <h3>Добавление категории задачи</h3>
      <div className="mb-3">
        <label htmlFor="CTname" className="form-label">
          Название
        </label>
        <input
          id="CTname"
          type="text"
          className="form-control"
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="CTdescription" className="form-label">
          Описание
        </label>
        <textarea
          id="CTdescription"
          onChange={(event) => setDescription(event.target.value)}
          className="form-control"
          style={{ height: "100px" }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={create}
        >
          Создать
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => setShow(!show)}
        >
          Выход
        </button>
      </div>
    </div>
  );
}
