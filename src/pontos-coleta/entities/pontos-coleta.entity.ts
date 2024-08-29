import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class PontosColeta extends Model<PontosColeta> {
  @Column
  nome: string;

  @Column
  endereco: string;

  @Column
  tipo: string;

  @Column
  coordenadas: string;

  @Column
  descricao: string;

  @Column
  horarioFuncionamento: string;

  @Column
  dataCriacao: Date;

  @Column
  dataAtualizacao: Date;
}
