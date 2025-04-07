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
import { Groups } from "@src/groups/groups.model";
import { TStage, TTemplateUser } from "./types/tasks.type";
import { TaskCategory } from "@src/task-category/task-category.model";

@Table
export class Tasks extends Model<Tasks> {
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
  @BelongsTo(() => Groups, {
    onDelete: "CASCADE"
  })
  groups: Groups;

  @AllowNull(false)
  @ForeignKey(() => TaskCategory)
  @Column(DataType.UUID)
  taskCategoryId: string;
  @BelongsTo(() => TaskCategory, "taskCategoryId")
  taskCategory: TaskCategory;
}
