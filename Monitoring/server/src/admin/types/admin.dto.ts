import { IsString, IsUUID } from "class-validator";

class BodyUserDto {
  login: string;

  @IsString()
  name: string;

  @IsUUID()
  @IsString()
  role: string;
}

export class CreateUserDto extends BodyUserDto {}

export class FindOneParamsDto {
  @IsUUID()
  @IsString()
  id: string;
}

export class UpdateUserDto extends CreateUserDto {
  @IsUUID()
  @IsString()
  id: string;
}

export class DeleteGroupDto extends FindOneParamsDto {}
