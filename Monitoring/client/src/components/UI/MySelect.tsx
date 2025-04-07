import { IOptionSelect } from "@/types/general";

export function MySelect(select: {
  options: Array<IOptionSelect>;
  selected?: string | number | null;
  label: string;
  id: string;
  onChange?: (el: { target: { value: string | number } }) => void;
}) {
  return (
    <div className="form-floating">
      <select
        className="form-select"
        id={select?.id}
        aria-label="Floating label select example"
        onChange={select.onChange}
        // defaultValue={select?.selected ? select?.selected : "DEFAULT"}
        value={select?.selected ? select?.selected : "DEFAULT"}
      >
        <option value="DEFAULT" disabled>
          Выберите из списка
        </option>
        {select.options.map((el) => {
          return (
            <option value={el.value} key={el.value}>
              {el.label}
            </option>
          );
        })}
      </select>
      <label htmlFor={select?.id}>{select.label} </label>
    </div>
  );
}
