import { Injectable, Inject } from '@nestjs/common';
import { Usuario } from './entities/usuario.entity';
import { BetaConnection } from 'src/infra/database/connections/beta.connection';
import { UsuarioResponseDto } from '../controller/dto/usuario.response.dto';
import { Model, Op } from 'sequelize';

@Injectable()
export class UsuarioRepository {
  constructor(@Inject('BETA_CONNECTION') private readonly db: BetaConnection) {}

  async findAll(): Promise<UsuarioResponseDto[]> {
    return await this.db.sequelize.models['Usuario'].findAll()[0];
  }

  async findOne(id: number): Promise<UsuarioResponseDto> {
    return (await this.db.sequelize.models['Usuario'].findByPk(id)).dataValues;
  }

  async findOneByCpfOrEmail(
    cpf: string,
    email: string,
  ): Promise<UsuarioResponseDto> {
    return (
      await this.db.sequelize.models['Usuario'].findOne({
        where: {
          [Op.or]: [{ cpf }, { email }],
        },
      })
    ).dataValues;
  }

  async create(
    usuarioCreateDto: Partial<Usuario>,
  ): Promise<Model<UsuarioResponseDto, UsuarioResponseDto>> {
    return await this.db.sequelize.models['Usuario'].create(usuarioCreateDto);
  }

  async update(id: number, data: Partial<Usuario>): Promise<[number]> {
    return await this.db.sequelize.models['Usuario'].update(data, {
      where: { id },
    });
  }

  async remove(id: number): Promise<void> {
    await this.db.sequelize.models['Usuario'].destroy({ where: { id } });
  }
}
