/* eslint-disable @typescript-eslint/no-explicit-any */
import Select from "react-select";

export function mySelectInput({
  options,
  defaultValue,
  onChange,
  placeholder,
}: {
  options: Array<{
    value: string;
    label: string;
  }>;
  defaultValue?: any;
  onChange: (val: any) => void;
  placeholder?: string;
}) {
  return (
    <Select
      options={options}
      defaultValue={defaultValue}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
