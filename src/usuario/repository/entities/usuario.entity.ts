import { Column, Model, Table, HasMany } from 'sequelize-typescript';
import { PontosColeta } from 'src/pontos-coleta/entities/pontos-coleta.entity';

@Table
export class Usuario extends Model<Usuario> {
  @Column
  nome: string;

  @Column
  email: string;

  @Column
  senha: string;

  @Column
  dataCriacao: Date;

  @HasMany(() => PontosColeta)
  pontosColeta: PontosColeta[];
}
