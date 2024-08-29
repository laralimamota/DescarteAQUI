import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PontosColeta } from '../entities/pontos-coleta.entity';
import { PontosColetaService } from '../service/pontos-coleta.service';

@Controller('pontos-coleta')
export class PontosColetaController {
  constructor(private readonly pontosColetaService: PontosColetaService) {}

  @Get()
  async findAll(): Promise<PontosColeta[]> {
    return this.pontosColetaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<PontosColeta> {
    return this.pontosColetaService.findOne(id);
  }

  @Post()
  async create(@Body() pontosColetaData: PontosColeta): Promise<PontosColeta> {
    return this.pontosColetaService.create(pontosColetaData);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() pontosColetaData: PontosColeta,
  ): Promise<PontosColeta> {
    return this.pontosColetaService.update(id, pontosColetaData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.pontosColetaService.remove(id);
  }
}
