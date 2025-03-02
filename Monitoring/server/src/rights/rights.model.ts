import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AllowNull,
} from "sequelize-typescript";

@Table
export class Rights extends Model<Rights> {
  @PrimaryKey
  @Column
  name: string;

  @AllowNull(false)
  @Column
  description: string;
}
