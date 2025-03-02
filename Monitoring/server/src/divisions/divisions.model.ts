import { Sequelize } from "sequelize";
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  Default,
  ForeignKey,
  BelongsTo,
  AllowNull,
} from "sequelize-typescript";
import { Branches } from "src/branches/branches.model";

@Table
export class Divisions extends Model<Divisions> {
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
  @ForeignKey(() => Branches)
  @Column(DataType.UUID)
  branchId: string;

  @BelongsTo(() => Branches, "branchId")
  branches: Branches;
}
