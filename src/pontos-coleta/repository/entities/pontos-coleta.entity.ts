import { Column, Model, Table, ForeignKey } from 'sequelize-typescript';
import { Usuario } from 'src/usuario/repository/entities/usuario.entity';

@Table
export class PontosColeta extends Model<PontosColeta> {
  @Column
  endereco: string;

  @Column
  cidade: string;

  @Column
  estado: string;

  @Column
  codtipo: number;

  @Column
  descricao: string;

  @Column
  horariofuncionamento: string;

  @Column
  dataCriacao: Date;

  @Column
  dataAtualizacao: Date;

  @ForeignKey(() => Usuario)
  @Column
  usuarioIns: number;

  @Column
  telefone: string;
}
