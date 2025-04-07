import { IsNotEmpty, IsString } from "class-validator";

export class createTaskCategoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
