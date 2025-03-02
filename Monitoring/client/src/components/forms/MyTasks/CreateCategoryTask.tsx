import { clientAPI } from "@/services/utils/clientApi";
import { useState } from "react";
import { toast } from "react-toastify";

export function CreateCategoryTask({
  setShow,
  show,
  setSelectsTC,
  selectsTC,
}: {
  setShow: (val: boolean) => void;
  show: boolean;
  setSelectsTC: (array: Array<{ value: string; label: string }>) => void;
  selectsTC: Array<{ value: string; label: string }>;
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const create = async () => {
    if (name && description) {
      const api = clientAPI({
        method: "POST",
        path: "taskcategory",
        data: {
          name,
          description,
        },
      });
      const data: {
        entry: {
          id: string;
          name: string;
        };
      } = await api();
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
