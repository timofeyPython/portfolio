import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class CreateGroupConfDto {
  @IsNotEmpty()
  @IsUUID()
  userId: string;

  @IsNotEmpty()
  @IsUUID()
  groupId: string;

  @IsNotEmpty()
  @IsUUID()
  rightId: string;
}

export class UpdateGroupConfDto {
  @IsString()
  @IsUUID()
  id: string;

  @IsNotEmpty()
  @IsUUID()
  rightId: string;
}

export class FindOneGroupConfDto {
  @IsString()
  @IsUUID()
  id: string;
}

export class DeleteGroupConfDto extends FindOneGroupConfDto {}
