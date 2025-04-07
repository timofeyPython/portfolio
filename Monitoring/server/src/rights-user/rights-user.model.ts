import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AllowNull,
  Sequelize,
  Default,
  DataType,
} from "sequelize-typescript";

@Table
export class RightsUsers extends Model<RightsUsers> {
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
