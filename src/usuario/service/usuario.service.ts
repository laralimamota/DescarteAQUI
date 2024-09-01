import { LoggerService } from './../../infra/logs/loggerService';
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsuarioRepository } from '../repository/usuario.repository';
import { UsuarioResponseDto } from '../controller/dto/usuario.response.dto';
import { UsuarioCreateDto } from '../controller/dto/create-usuario.dto';
import { UsuarioUpdateDto } from '../controller/dto/update-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    private readonly usuarioRepository: UsuarioRepository,
    private readonly loggerService: LoggerService,
  ) {
    this.loggerService.setContext(UsuarioService.name);
  }

  async findAll(): Promise<UsuarioResponseDto[]> {
    this.loggerService.silly('Iniciando serviço de buscar todos os usuários');

    const consulta = await this.usuarioRepository.findAll();

    this.loggerService.log({
      message: 'Usuários buscados com sucesso!',
      response: {
        body: consulta,
        statusCode: 200,
      },
    });
    return consulta;
  }

  async findOneByPk(id: number): Promise<UsuarioResponseDto> {
    this.loggerService.silly(
      'Iniciando serviço de buscar usuário pela chave primária',
    );

    const consulta = await this.usuarioRepository.findOne(id);

    this.loggerService.log({
      message: 'Usuário buscado com sucesso!',
      response: {
        statusCode: 200,
        body: consulta,
      },
    });

    return consulta;
  }

  async findOne(cpf: string, email: string): Promise<UsuarioResponseDto> {
    this.loggerService.silly(
      'Iniciando serviço de buscar usuário pelo CPF/CNPJ',
    );

    const consulta = await this.usuarioRepository.findOneByCpfOrEmail(
      cpf,
      email,
    );

    this.loggerService.log({
      message: 'Usuário buscado com sucesso!',
      response: {
        statusCode: 200,
        body: consulta,
      },
    });

    return consulta;
  }

  async create(usuarioCreateDto: UsuarioCreateDto): Promise<void> {
    this.loggerService.silly('Iniciando processo de criar usuário.');

    const existingUser = await this.findOne(
      usuarioCreateDto.cpf,
      usuarioCreateDto.email,
    );
    console.log(existingUser);
    this.loggerService.silly(
      'Iniciando serviço de buscar usuário pelo CPF/CNPJ',
    );
    if (existingUser) {
      throw new ConflictException(
        'Outro usuário com esse CPF/CNPJ já foi cadastrado!',
      );
    }

    await this.usuarioRepository.create(usuarioCreateDto);

    this.loggerService.log({
      message: 'Usuário criado com sucesso!',
      response: {
        statusCode: 201,
      },
    });
  }

  async update(id: number, usuarioUpdateDto: UsuarioUpdateDto): Promise<void> {
    this.loggerService.silly('Iniciando processo de atualização de usuário.');

    if (!this.findOneByPk(id)) {
      throw new NotFoundException('Usuário não encontrado.');
    } else {
      await this.usuarioRepository.update(id, usuarioUpdateDto);
    }

    this.loggerService.log({
      message: 'Usuário atualizado com sucesso!',
      response: {
        statusCode: 200,
      },
    });

    return;
  }

  async remove(id: number): Promise<void> {
    this.loggerService.silly('Iniciando processo de deletar usuário.');

    if (!this.findOneByPk(id)) {
      throw new NotFoundException('Usuário não encontrado.');
    } else {
      await this.usuarioRepository.remove(id);
    }

    this.loggerService.log({
      message: 'Usuário deletado com sucesso!',
      response: {
        statusCode: 200,
      },
    });

    return;
  }
}
