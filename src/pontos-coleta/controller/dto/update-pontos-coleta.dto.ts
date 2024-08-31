import { PartialType } from '@nestjs/swagger';
import { PontosColetaCreateDto } from './create-pontos-coleta.dto';

export class UpdatePontosColetaDto extends PartialType(PontosColetaCreateDto) {}
