import { Sequelize } from "sequelize";
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  Default,
  AllowNull,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Users } from "@src/user/user.model";

@Table
export class Groups extends Model<Groups> {
  @PrimaryKey
  @Default(Sequelize.literal("uuid_generate_v4()"))
  @Column(DataType.UUID)
  id: string;

  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Column
  nameFull: string;

  @AllowNull(false)
  @ForeignKey(() => Users)
  @Column(DataType.UUID)
  createdUserId: string;
  @BelongsTo(() => Users, "createdUserId")
  user: Users;

  @Column(DataType.TEXT)
  description: string;
}
