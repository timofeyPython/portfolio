import { IsString, IsUUID } from "class-validator";

export class FindOneGroupConfDto {
  @IsString()
  @IsUUID()
  id: string;
}
