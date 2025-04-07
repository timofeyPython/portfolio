import { Type } from "class-transformer";
import {
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from "class-validator";
import { TStage } from "./tasks.type";

export class deleteTaskDto {
  @IsNotEmpty()
  @IsString()
  id: string;
}

export class queryTasksDto {
  @IsOptional()
  @IsUUID()
  grId: string;
  @IsNotEmpty()
  @IsUUID()
  userId: string;
  @IsString()
  active: string;
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  start: Date;
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  end: Date;
}

class IUserTemplate {
  @IsString()
  @IsUUID()
  readonly id: string;
  @IsString()
  readonly name: string;
}

export class createTaskDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  description: string;
  @Type(() => IUserTemplate)
  @ValidateNested()
  @IsNotEmpty()
  createdUser: IUserTemplate;
  @ValidateNested()
  @IsNotEmpty()
  assigned: IUserTemplate;
  @ValidateNested()
  @IsNotEmpty()
  stage: TStage;
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  startTask: Date;
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  endTask: Date;
  @IsUUID()
  grId: string;
  @IsNotEmpty()
  @IsUUID()
  taskCategoryId: string;
}

export class updateTaskDto {
  @IsNotEmpty()
  @IsString()
  id: string;
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsString()
  description: string;
  @ValidateNested()
  @IsNotEmpty()
  stage: TStage;
  @IsNotEmpty()
  @IsUUID()
  taskCategoryId: string;
  @Type(() => Date)
  startTask: Date;
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  endTask: Date;
  @IsNotEmpty()
  @IsUUID()
  grId: string;
}
