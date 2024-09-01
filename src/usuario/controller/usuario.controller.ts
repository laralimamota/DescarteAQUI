import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsuarioService } from '../service/usuario.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsuarioResponseDto } from './dto/usuario.response.dto';
import { UsuarioCreateDto } from './dto/create-usuario.dto';
import { UsuarioUpdateDto } from './dto/update-usuario.dto';

@ApiTags('Usuário')
@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  @ApiOperation({
    summary: 'Busca todos os usuários cadastrados',
  })
  @ApiResponse({
    status: 200,
    type: UsuarioResponseDto,
    isArray: true,
  })
  async findAll(): Promise<UsuarioResponseDto[]> {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Busca um usuário pela chave primária,',
  })
  @ApiResponse({
    status: 200,
    description: '',
    type: UsuarioResponseDto,
    isArray: false,
  })
  async findOne(@Param('id') id: number): Promise<UsuarioResponseDto> {
    return this.usuarioService.findOneByPk(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Registra um novo usuário.',
  })
  @ApiResponse({
    status: 201,
  })
  async create(@Body() usuariosData: UsuarioCreateDto): Promise<void> {
    await this.usuarioService.create(usuariosData);
    return;
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Atualiza o cadastro de um usuário.',
  })
  @ApiResponse({
    status: 200,
    description: '',
  })
  async update(
    @Param('id') id: number,
    @Body() usuarioUpdateDto: UsuarioUpdateDto,
  ): Promise<void> {
    await this.usuarioService.update(id, usuarioUpdateDto);
    return;
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Exclui o cadastro de um usuário.',
  })
  @ApiResponse({
    status: 200,
  })
  async remove(@Param('id') id: number): Promise<void> {
    await this.usuarioService.remove(id);
    return;
  }
}
