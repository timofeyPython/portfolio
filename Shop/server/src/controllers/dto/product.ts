import { checkValue } from "@/libs/utils";
import { TDtoValue } from "@/types/controllers";

export class DtoProductCreate {
  name: TDtoValue;
  price: TDtoValue;
  description: TDtoValue;
  typeCategoryId: TDtoValue;
  typeLightingId: TDtoValue;
  typeColorTemperatureId: TDtoValue;

  constructor({
    name,
    price,
    description,
    typeCategoryId,
    typeLightingId,
    typeColorTemperatureId,
  }) {
    this.name = checkValue(name, "string");
    this.price = checkValue(price, "number");
    this.description = checkValue(description, "string");
    this.typeCategoryId = checkValue(typeCategoryId, "string");
    this.typeLightingId = checkValue(typeLightingId, "string");
    this.typeColorTemperatureId = checkValue(typeColorTemperatureId, "string");
  }
}

export class DtoProductUpdate {
  id: TDtoValue;
  name: TDtoValue;
  price: TDtoValue;
  description: TDtoValue;

  constructor({ name, price, description, id }) {
    this.id = checkValue(id, "number");
    this.name = checkValue(name, "string");
    this.price = checkValue(price, "number");
    this.description = checkValue(description, "string");
  }
}

export class DtoProductDelete {
  id: TDtoValue;

  constructor({ id }) {
    this.id = checkValue(id, "number");
  }
}
