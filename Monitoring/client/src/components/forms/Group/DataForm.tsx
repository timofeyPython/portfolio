import UI from "@components/UI";
import { IDataIProps, IDataPropsEdit } from "./types/props.types";

export function DataForm({
  title,
  setName,
  setFullName,
  setDescription,
  value1,
  value2,
  value3,
}: IDataIProps & IDataPropsEdit) {
  return (
    <>
      <form>
        <h1>{title}</h1>
        <UI.MyFormMb3
          id="shortNameGroup"
          labelName="Имя группы (короткое):"
          onInput={setName}
          value={value1}
        />
        <UI.MyFormMb3
          id="fullNameGroup"
          labelName="Имя группы (длинное):"
          onInput={setFullName}
          value={value2}
        />
        <UI.MyFormMb3
          id="description"
          labelName="Описание:"
          onInput={setDescription}
          value={value3}
        />
      </form>
    </>
  );
}
