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
  Index,
} from "sequelize-typescript";
import { Rights } from "src/rights/rights.model";
import { Users } from "src/users/users.model";

@Table
export class Conformities extends Model<Conformities> {
  @PrimaryKey
  @Default(Sequelize.literal("uuid_generate_v4()"))
  @Column(DataType.UUID)
  id: string;

  @Index({ name: "userId-rightId", unique: true })
  @AllowNull(false)
  @ForeignKey(() => Users)
  @Column(DataType.UUID)
  userId: string;
  @BelongsTo(() => Users, "userId")
  users: Users;

  @Index({ name: "userId-rightId", unique: true })
  @AllowNull(false)
  @ForeignKey(() => Rights)
  @Column(DataType.STRING)
  rightId: string;
  @BelongsTo(() => Rights, "rightId")
  rights: Rights;

  @Column(DataType.JSONB)
  details: JSON;
}
