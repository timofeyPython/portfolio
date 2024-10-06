import { Sequelize } from 'sequelize';
import { Table, Column, Model, PrimaryKey, DataType, Default, ForeignKey, AllowNull, BelongsTo } from 'sequelize-typescript';
import { Groups } from 'src/groups/groups.model';

@Table

export class Task extends Model<Task> {

  @PrimaryKey
  @Default(Sequelize.literal('uuid_generate_v4()'))
  @Column(DataType.UUID)
  id: string;

  @Column
  name: string;

  @Column
  description: string;

  @Column
  number: number;

  @Column('jsonb')
  createdUser: JSON;

  @Column('jsonb')
  assigned: JSON

  @Column('jsonb')
  stage: JSON

  @Column
  startTask: Date

  @Column
  endTask: Date

  @AllowNull(false)
  @ForeignKey(()=> Groups)
  @Column(DataType.UUID)
  grId: string
  @BelongsTo(()=> Groups, 'grId')
  groups: Groups
}