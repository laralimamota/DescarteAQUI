import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PontosColeta } from '../repository/entities/pontos-coleta.entity';
import { PontosColetaService } from '../service/pontos-coleta.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Pontos de coleta')
@Controller('pontos-coleta')
export class PontosColetaController {
  constructor(private readonly pontosColetaService: PontosColetaService) {}

  @Get()
  @ApiOperation({
    summary: '',
  })
  @ApiResponse({
    status: 200,
    description: '',
    type: PontosColeta,
    isArray: true,
  })
  async findAll(): Promise<PontosColeta[]> {
    return this.pontosColetaService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: '',
  })
  @ApiResponse({
    status: 200,
    description: '',
    type: PontosColeta,
    isArray: false,
  })
  async findOne(@Param('id') id: number): Promise<PontosColeta> {
    return this.pontosColetaService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: '',
  })
  @ApiResponse({
    status: 201,
    description: '',
  })
  async create(@Body() pontosColetaData: PontosColeta): Promise<void> {
    this.pontosColetaService.create(pontosColetaData);
    return;
  }

  @Put(':id')
  @ApiOperation({
    summary: '',
  })
  @ApiResponse({
    status: 200,
    description: '',
  })
  async update(
    @Param('id') id: number,
    @Body() pontosColetaData: PontosColeta,
  ): Promise<PontosColeta> {
    return this.pontosColetaService.update(id, pontosColetaData);
  }

  @Delete(':id')
  @ApiOperation({
    summary: '',
  })
  @ApiResponse({
    status: 200,
    description: '',
  })
  async remove(@Param('id') id: number): Promise<void> {
    return this.pontosColetaService.remove(id);
  }
}
