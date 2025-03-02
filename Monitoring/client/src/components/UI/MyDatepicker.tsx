import DatePicker from "react-datepicker";
import * as packesDate from "date-fns/locale/ru";
import "react-datepicker/dist/react-datepicker.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const lang: any = packesDate.ru;

export function MyDatepicker(obj: {
  selected: Date;
  onChange: (date: Date) => void;
  id: string;
  description?: string;
}) {
  return (
    <div>
      {obj.description ? (
        <label htmlFor={obj.id} style={{ marginRight: "10px" }}>
          {obj.description}
        </label>
      ) : (
        <></>
      )}
      <DatePicker
        dateFormat="dd-MM-yyyy"
        showIcon
        id={obj.id}
        locale={lang}
        selected={obj.selected}
        onChange={(date) => date && obj.onChange(date)}
      />
    </div>
  );
}
