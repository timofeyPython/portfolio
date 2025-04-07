/* eslint-disable @typescript-eslint/no-explicit-any */
import { IOptionSelect } from "@/types/general";
import Select from "react-select";

export function mySelectInput({
  options,
  defaultValue,
  onChange,
  placeholder,
}: {
  options: Array<IOptionSelect>;
  defaultValue?: any;
  onChange: (val: any) => void;
  placeholder?: string;
}) {
  return (
    <Select
      options={options}
      defaultValue={defaultValue}
      value={defaultValue}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
