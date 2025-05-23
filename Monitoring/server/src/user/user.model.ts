import { Sequelize } from "sequelize";
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  Default,
  AllowNull,
} from "sequelize-typescript";

@Table({
  timestamps: false,
})
export class Users extends Model<Users> {
  @PrimaryKey
  @Default(Sequelize.literal("uuid_generate_v4()"))
  @Column(DataType.UUID)
  id: string;

  @AllowNull(false)
  @Column
  login: string;

  @AllowNull(false)
  @Column
  name: string;

  @Column
  hash_password: string;

  @Column
  hash_update: Date;

  @Column("json")
  info: {mail: string};
}
