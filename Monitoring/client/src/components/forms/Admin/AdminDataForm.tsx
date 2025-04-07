import UI from "@components/UI";
import { IAdminDataFormProps } from "./types/types.props";
export function AdminDataForm({ data, children }: IAdminDataFormProps) {
  return (
    <>
      <div className="data-form">
        <div className="mb-3">
          <label className="form-label" htmlFor={data.form1.id}>
            {data.form1.label}
          </label>
          <input
            className="form-control"
            id={data.form1.id}
            type="text"
            value={data.form1.value}
            onInput={(event) => {
              const target = event.target as HTMLButtonElement;
              data.form1.onInput(`${target.value}`);
            }}
          />
          <div id="emailHelp" className="form-text">
            Введите доменный логин пользователя <br /> (дупликаты логинов не
            допускаются)
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor={data.form2.id}>
            {data.form2.label}
          </label>
          <input
            className="form-control"
            id={data.form2.id}
            type="text"
            value={data.form2.value}
            onInput={(event) => {
              const target = event.target as HTMLButtonElement;
              data.form2.onInput(`${target.value}`);
            }}
          />
        </div>
        <div className="mb-3">
          <UI.MySelect
            id={data.form3.id}
            options={data.form3.options}
            selected={data.form3.select}
            label={data.form3.label}
            onChange={(val) => data.form3.onChange(`${val.target.value}`)}
          />
        </div>
        {children}
      </div>
    </>
  );
}
