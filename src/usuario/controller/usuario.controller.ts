import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Usuario } from '../repository/entities/usuario.entity';
import { UsuarioService } from '../service/usuario.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Usuário')
@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  @ApiOperation({
    summary: '',
  })
  @ApiResponse({
    status: 200,
    description: '',
    type: Usuario,
    isArray: true,
  })
  async findAll(): Promise<Usuario[]> {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: '',
  })
  @ApiResponse({
    status: 200,
    description: '',
    type: Usuario,
    isArray: false,
  })
  async findOne(@Param('id') id: number): Promise<Usuario> {
    return this.usuarioService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: '',
  })
  @ApiResponse({
    status: 201,
    description: '',
  })
  async create(@Body() usuariosData: Usuario): Promise<Usuario> {
    return this.usuarioService.create(usuariosData);
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
    @Body() usuariosData: Usuario,
  ): Promise<Usuario> {
    return this.usuarioService.update(id, usuariosData);
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
    return this.usuarioService.remove(id);
  }
}
