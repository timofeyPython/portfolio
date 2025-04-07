import {
  Default,
  PrimaryKey,
  Table,
  DataType,
  Column,
  Model,
  AllowNull,
} from "sequelize-typescript";
import { Sequelize } from "sequelize";

@Table
export class TaskCategory extends Model<TaskCategory> {
  @PrimaryKey
  @Default(Sequelize.literal("uuid_generate_v4()"))
  @Column(DataType.UUID)
  id: string;

  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Column
  description: string;
}
