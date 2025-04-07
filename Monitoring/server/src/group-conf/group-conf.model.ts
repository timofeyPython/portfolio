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
import { Groups } from "@src/groups/groups.model";
import { RightsGroups } from "@src/rights-group/rights-group.model";
import { Users } from "@src/user/user.model";

@Table
export class GroupConf extends Model<GroupConf> {
  @PrimaryKey
  @Default(Sequelize.literal("uuid_generate_v4()"))
  @Column(DataType.UUID)
  id: string;

  @Index({ name: "userId-groupConfId", unique: true })
  @AllowNull(false)
  @ForeignKey(() => Users)
  @Column(DataType.UUID)
  userId: string;
  @BelongsTo(() => Users, "userId")
  users: Users;

  @Index({ name: "userId-groupConfId", unique: true })
  @AllowNull(false)
  @ForeignKey(() => Groups)
  @Column(DataType.UUID)
  groupId: string;
  @BelongsTo(() => Groups, {
    onDelete: "CASCADE"
  })
  groups: Groups;

  @AllowNull(false)
  @ForeignKey(() => RightsGroups)
  @Column(DataType.UUID)
  rightId: string;
  @BelongsTo(() => RightsGroups, {
    onDelete: "CASCADE"
  })
  rights: RightsGroups;
}
