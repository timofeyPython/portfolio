import { checkValue } from "@/libs/utils";
import { TDtoValue } from "@/types/controllers";
 
export class DtoUserLogin {
  email: TDtoValue;
  password: TDtoValue;

  constructor({ email, password }) {
    this.email = checkValue(email, "string");
    this.password = checkValue(password, "string");
  }
}

export class DtoUserRegistration {
  email: TDtoValue
  password: TDtoValue
  role: TDtoValue

  constructor({ email, password, role }) {
    this.email = checkValue(email, "string");
    this.password = checkValue(password, "string");
    this.role = checkValue(role, "string");
  }
}