import { checkValue } from "@/libs/utils";
import { TDtoValue } from "@/types/controllers";
export class DtoCreateType {
  name: TDtoValue;
  constructor({ name }) {
    this.name = checkValue(name, "string");
  }
}

export class DtoUpdateType {
  name: TDtoValue;
  id: TDtoValue;
  constructor({ name, id }) {
    this.name = checkValue(name, "string");
    this.id = checkValue(id, "number");
  }
}

export class DtoDeleteType {
  id: TDtoValue;
  constructor({ id }) {
    this.id = checkValue(id, "number");
  }
}
