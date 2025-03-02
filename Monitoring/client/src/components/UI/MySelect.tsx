export function MySelect(select: {
  options: Array<{ value: string | number; description: string }>;
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
        value={select?.selected ? select?.selected : ""}
      >
        {select.options.map((el) => {
          return (
            <option value={el.value} key={el.value}>
              {el.description}
            </option>
          );
        })}
      </select>
      <label htmlFor={select?.id}>{select.label} </label>
    </div>
  );
}
