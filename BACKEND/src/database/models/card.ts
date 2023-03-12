import {
  Table,
  Column,
  Model,
  IsUUID,
  PrimaryKey,
  DataType,
} from 'sequelize-typescript';
import { Optional } from 'sequelize';

export interface ICard {
  id: string;
  titulo: string;
  conteudo: string;
  lista: string;
}

type PersonCreationAttributes = Optional<ICard, 'id'>;

@Table
export default class Card extends Model<ICard, PersonCreationAttributes> {
  @IsUUID(4)
  @PrimaryKey
  @Column(DataType.STRING)
  id!: string;

  @Column(DataType.STRING)
  titulo!: string;

  @Column(DataType.STRING)
  lista!: string;

  @Column(DataType.STRING)
  conteudo!: string;
}
