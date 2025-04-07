import { IsOptional, IsString, IsUUID } from "class-validator";

export class CreateUserDto {
  @IsString()
  login: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  password?: string;
}

export class FindOneParamsDto {
  @IsUUID()
  @IsString()
  id: string;
}

export class UpdateUserDto {
  @IsString()
  login: string;

  @IsString()
  name: string;

  @IsUUID()
  @IsString()
  id: string;
}

export class DeleteGroupDto extends FindOneParamsDto {}
