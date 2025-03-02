import { checkValue } from "@/libs/utils";
import { TDtoValue } from "@/types/controllers";

export class DtoOrderCreate {
  price: TDtoValue;
  name: TDtoValue;
  surname: TDtoValue;
  email: TDtoValue;
  phone: TDtoValue;
  address: TDtoValue;
  delivery: TDtoValue;
  montage: TDtoValue;
  comments: TDtoValue;
  status: TDtoValue;

  constructor({
    price,
    name,
    surname,
    email,
    phone,
    address,
    delivery,
    montage,
    comments,
  }) {
    this.price = checkValue(price, "number");
    this.name = checkValue(name, "string");
    this.surname = checkValue(surname, "string");
    this.email = checkValue(email, "string");
    this.phone = checkValue(phone, "number");
    this.address = checkValue(address, "string");
    this.delivery = checkValue(delivery, "boolean");
    this.montage = checkValue(montage, "boolean");
    this.comments = checkValue(comments, "string");
  }
}
