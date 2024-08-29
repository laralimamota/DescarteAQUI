import { PartialType } from '@nestjs/swagger';
import { CreatePontosColetaDto } from './create-pontos-coleta.dto';

export class UpdatePontosColetaDto extends PartialType(CreatePontosColetaDto) {}
