import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Usuarios } from 'src/usuario/entities/usuario.entity';

@Table
export class Administradores extends Model<Administradores> {
  @ForeignKey(() => Usuarios)
  @Column
  usuarioId: number;

  @Column
  nivelAcesso: string;
}
