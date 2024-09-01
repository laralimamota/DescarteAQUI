import { PartialType } from '@nestjs/swagger';
import { UsuarioCreateDto } from './create-usuario.dto';

export class UsuarioUpdateDto extends PartialType(UsuarioCreateDto) {}
