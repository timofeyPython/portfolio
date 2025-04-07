import { Sequelize } from "sequelize";
import {
  Table,
  Model,
  PrimaryKey,
  Default,
  DataType,
  Column,
  AllowNull,
  Index,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { RightsUsers } from "@src/rights-user/rights-user.model";
import { Users } from "@src/user/user.model";

@Table
export class UsersConf extends Model<UsersConf> {
  @PrimaryKey
  @Default(Sequelize.literal("uuid_generate_v4()"))
  @Column(DataType.UUID)
  id: string;

  @Index({ name: "userId-userConfId", unique: true })
  @AllowNull(false)
  @ForeignKey(() => Users)
  @Column(DataType.UUID)
  userId: string;
  @BelongsTo(() => Users, {
    onDelete: "CASCADE"
  })
  users: Users;

  @Index({ name: "userId-userConfId", unique: true })
  @AllowNull(false)
  @ForeignKey(() => RightsUsers)
  @Column(DataType.UUID)
  rightId: string;
  @BelongsTo(() => RightsUsers, {
    onDelete: "CASCADE"
  })
  rights: RightsUsers;
}
