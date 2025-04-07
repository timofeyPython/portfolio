import { Type } from "class-transformer";
import { IsNotEmpty, IsOptional, IsString, IsUUID, IsArray, MinLength, ValidateNested, IsEnum } from "class-validator";

class invatedUsersDto {
  @IsString()
  @MinLength(1)
  userId: string;

  @IsString()
  @MinLength(1)
  rightId: string;

  @IsString()
  description: string;
}

export class CreateGroupDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  nameFull: string;
  @IsNotEmpty()
  @IsString()
  description: string;
  @IsOptional()
  @IsUUID()
  createdUserId?: string;
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => invatedUsersDto)
  invatedUsers: invatedUsersDto[];
}

export class UpdateGroupDto {
  @IsString()
  @IsUUID()
  id: string;
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  nameFull: string;
  @IsOptional()
  @IsString()
  description: string;
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => invatedUsersDto)
  invatedUsers: invatedUsersDto[];
}

export class FindOneGroupDto {
  @IsString()
  @IsUUID()
  id: string;
}

export class DeleteGroupDto extends FindOneGroupDto {}
