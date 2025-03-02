import { IsNotEmpty, IsUUID } from "class-validator";

export class findAllGrDto {
  @IsNotEmpty()
  @IsUUID()
  dp: string;
}
