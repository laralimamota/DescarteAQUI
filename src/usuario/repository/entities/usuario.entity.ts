import {
  Column,
  Model,
  PrimaryKey,
  Table,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({
  tableName: 'usuario',
  timestamps: false,
})
export class Usuario extends Model<Usuario> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  nome: string;

  @Column
  cpf: string;

  @Column
  email: string;

  @Column
  senha: string;

  @Column
  data_criacao: Date;
}
