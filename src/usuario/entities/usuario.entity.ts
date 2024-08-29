import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Usuarios extends Model<Usuarios> {
  @Column
  nome: string;

  @Column
  email: string;

  @Column
  senha: string;

  @Column
  dataRegistro: Date;
}
