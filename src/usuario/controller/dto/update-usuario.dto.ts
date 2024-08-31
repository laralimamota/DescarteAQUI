import { PartialType } from '@nestjs/swagger';
import { UsuarioCreateDto } from './create-usuario.dto';

export class UpdateUsuarioDto extends PartialType(UsuarioCreateDto) {}
