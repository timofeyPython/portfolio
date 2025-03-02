import {
  IsNotEmpty,
  IsString,
  IsDate,
  IsNumber,
  IsBoolean,
  IsArray,
} from "class-validator";
import { Type } from "class-transformer";

interface IAnswers {
  questionId: string;
  answerId: string;
  date: Date;
  save: string;
}

export class PostBodyDto {
  @IsNotEmpty()
  @IsString()
  id: string;
  @IsNotEmpty()
  @IsString()
  typeTest: string;
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  startDate: Date;
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  endDate: Date;
  @IsNotEmpty()
  @IsArray()
  answers: Array<IAnswers>;

  @IsNotEmpty()
  @IsString()
  passTime: string;
  @IsNotEmpty()
  @IsNumber()
  countAnswers: number;
  @IsNotEmpty()
  @IsNumber()
  countQuestions: number;
  @IsNotEmpty()
  @IsBoolean()
  finish: boolean;
}
