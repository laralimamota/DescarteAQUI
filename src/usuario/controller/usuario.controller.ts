import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Usuarios } from '../entities/usuario.entity';
import { UsuarioService } from '../service/usuario.service';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  async findAll(): Promise<Usuarios[]> {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Usuarios> {
    return this.usuarioService.findOne(id);
  }

  @Post()
  async create(@Body() usuariosData: Usuarios): Promise<Usuarios> {
    return this.usuarioService.create(usuariosData);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() usuariosData: Usuarios,
  ): Promise<Usuarios> {
    return this.usuarioService.update(id, usuariosData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.usuarioService.remove(id);
  }
}
