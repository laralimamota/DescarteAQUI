import { Injectable, Inject } from '@nestjs/common';
import { Usuario } from './entities/usuario.entity';
import { BetaConnection } from 'src/infra/database/connections/beta.connection';

@Injectable()
export class UsuarioRepository {
  constructor(@Inject('BETA_CONNECTION') private readonly db: BetaConnection) {}

  async findAll(): Promise<Usuario[]> {
    return await this.db.sequelize.models['Usuarios'].findAll()[0];
  }

  async findOne(id: number): Promise<Usuario> {
    return await this.db.sequelize.models['Usuarios'].findByPk(id)[0];
  }

  async create(data: Partial<Usuario>): Promise<Usuario> {
    return await this.db.sequelize.models['Usuarios'].create(data)[0];
  }

  async update(id: number, data: Partial<Usuario>): Promise<Usuario> {
    await this.db.sequelize.models['Usuarios'].update(data, { where: { id } });
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.db.sequelize.models['Usuarios'].destroy({ where: { id } });
  }
}
