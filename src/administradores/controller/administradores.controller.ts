import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Administradores } from '../entities/administradore.entity';
import { AdministradoresService } from '../service/administradores.service';

@Controller('administradores')
export class AdministradoresController {
  constructor(
    private readonly administradoresService: AdministradoresService,
  ) {}

  @Get()
  async findAll(): Promise<Administradores[]> {
    return this.administradoresService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Administradores> {
    return this.administradoresService.findOne(id);
  }

  @Post()
  async create(
    @Body() administradoresData: Administradores,
  ): Promise<Administradores> {
    return this.administradoresService.create(administradoresData);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() administradoresData: Administradores,
  ): Promise<Administradores> {
    return this.administradoresService.update(id, administradoresData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.administradoresService.remove(id);
  }
}
