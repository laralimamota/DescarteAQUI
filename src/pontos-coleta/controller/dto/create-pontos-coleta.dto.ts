import { ApiProperty } from '@nestjs/swagger';

export class PontosColetaCreateDto {
  @ApiProperty({ example: 'Rua das Flores, 123' })
  endereco: string;

  @ApiProperty({ example: 'São Paulo' })
  cidade: string;

  @ApiProperty({ example: 'SP' })
  estado: string;

  @ApiProperty({ example: 1 })
  codtipo: number;

  @ApiProperty({ example: 'Coleta de eletrônicos e pilhas' })
  descricao: string;

  @ApiProperty({ example: '08:00 - 18:00' })
  horariofuncionamento: string;

  @ApiProperty({ example: 1 })
  usuarioIns: number;

  @ApiProperty({ example: '(11) 98765-4321' })
  telefone: string;
}
