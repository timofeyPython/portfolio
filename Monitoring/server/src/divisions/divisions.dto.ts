import { IsNotEmpty, IsUUID } from "class-validator";

export class findAllDvDto {
  @IsNotEmpty()
  @IsUUID()
  br: string;
}
