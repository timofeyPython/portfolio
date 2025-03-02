import { IsNotEmpty, IsUUID } from "class-validator";

export class findAllDpDto {
  @IsNotEmpty()
  @IsUUID()
  dv: string;
}
