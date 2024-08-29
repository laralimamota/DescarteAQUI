import { Injectable, Inject } from '@nestjs/common';
import { Usuarios } from '../entities/usuario.entity';
import { BetaConnection } from 'src/infra/database/connections/beta.connection';

@Injectable()
export class UsuariosRepository {
  constructor(@Inject('BETA_CONNECTION') private readonly db: BetaConnection) {}

  async findAll(): Promise<Usuarios[]> {
    return await this.db.sequelize.models['Usuarios'].findAll()[0];
  }

  async findOne(id: number): Promise<Usuarios> {
    return await this.db.sequelize.models['Usuarios'].findByPk(id)[0];
  }

  async create(data: Partial<Usuarios>): Promise<Usuarios> {
    return await this.db.sequelize.models['Usuarios'].create(data)[0];
  }

  async update(id: number, data: Partial<Usuarios>): Promise<Usuarios> {
    await this.db.sequelize.models['Usuarios'].update(data, { where: { id } });
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.db.sequelize.models['Usuarios'].destroy({ where: { id } });
  }
}
