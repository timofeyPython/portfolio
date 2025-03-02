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
import { Departaments } from "src/departaments/departaments.model";

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
  @ForeignKey(() => Departaments)
  @Column(DataType.UUID)
  dpId: string;

  @BelongsTo(() => Departaments, "dpId")
  departaments: Departaments;
}
