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
} from "sequelize-typescript";
import { Divisions } from "src/divisions/divisions.model";

@Table
export class Departaments extends Model<Departaments> {
  @PrimaryKey
  @Default(Sequelize.literal("uuid_generate_v4()"))
  @Column(DataType.UUID)
  id: string;

  @Column
  name: string;

  @Column
  nameFull: string;

  @ForeignKey(() => Divisions)
  @Column(DataType.UUID)
  divisionId: string;

  @BelongsTo(() => Divisions, "divisionId")
  divisions: Divisions;
}
