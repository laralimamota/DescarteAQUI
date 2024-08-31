import { ApiProperty } from '@nestjs/swagger';

export class UsuarioCreateDto {
  @ApiProperty({ example: 'João Silva' })
  nome: string;

  @ApiProperty({ example: 'joao.silva@email.com' })
  email: string;

  @ApiProperty({ example: 'senhaSegura123' })
  senha: string;
}
