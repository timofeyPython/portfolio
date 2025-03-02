import { Sequelize } from "sequelize";
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  Default,
  ForeignKey,
  AllowNull,
  BelongsTo,
} from "sequelize-typescript";
import { Groups } from "src/groups/groups.model";
import { TStage, TTemplateUser } from "./tasks.type";
import { TaskCategory } from "src/taskcategory/taskcategory.model";

@Table
export class Task extends Model<Task> {
  @PrimaryKey
  @Default(Sequelize.literal("uuid_generate_v4()"))
  @Column(DataType.UUID)
  id: string;

  @Column
  name: string;

  @Column
  description: string;

  @Column
  number: number;

  @Column(DataType.JSONB)
  createdUser: TTemplateUser;

  @Column(DataType.JSONB)
  assigned: TTemplateUser;

  @Column(DataType.JSONB)
  stage: TStage;

  @Column
  startTask: Date;

  @Column
  endTask: Date;

  @AllowNull(false)
  @ForeignKey(() => Groups)
  @Column(DataType.UUID)
  grId: string;
  @BelongsTo(() => Groups, "grId")
  groups: Groups;

  @AllowNull(false)
  @ForeignKey(() => TaskCategory)
  @Column(DataType.UUID)
  taskCategoryId: string;
  @BelongsTo(() => TaskCategory, "taskCategoryId")
  taskCategory: TaskCategory;
}
