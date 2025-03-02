import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  Default,
} from "sequelize-typescript";
import { Sequelize } from "sequelize";
import { IQuestions } from "./questionnaire.type";

@Table
export class Questionnaire extends Model<Questionnaire> {
  @PrimaryKey
  @Default(Sequelize.literal("uuid_generate_v4()"))
  @Column(DataType.UUID)
  id: string;

  @Column
  name: string;

  @Column
  sorted: number;

  @Column
  title: string;

  @Column
  description: string;

  @Column(DataType.JSON)
  questions: IQuestions;
}
