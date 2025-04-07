interface IFormMb3 {
  id: string;
  labelName: string;
  onInput(vla: string | number): void;
  value?: string;
}

export function MyFormMb3({ id, labelName, value, onInput }: IFormMb3) {
  return (
    <>
      <div className="mb-3">
        <div className="form-floating mb-3">
          <textarea
            value={value}
            className="form-control"
            id={id}
            style={{ height: 100 }}
            onInput={(e) => {
              const val = e.target as HTMLButtonElement;
              onInput(val.value);
            }}
          ></textarea>
          <label htmlFor={id}>{labelName}</label>
        </div>
      </div>
    </>
  );
}
