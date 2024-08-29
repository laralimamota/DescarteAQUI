// administradores.repository.ts
import { Injectable, Inject } from '@nestjs/common';
import { Administradores } from '../entities/administradore.entity';
import { BetaConnection } from 'src/infra/database/connections/beta.connection';

@Injectable()
export class AdministradoresRepository {
  constructor(@Inject('BETA_CONNECTION') private readonly db: BetaConnection) {}

  async findAll(): Promise<Administradores[]> {
    return await this.db.sequelize.models['Administradores'].findAll()[0];
  }

  async findOne(id: number): Promise<Administradores> {
    return await this.db.sequelize.models['Administradores'].findByPk(id)[0];
  }

  async create(data: Partial<Administradores>): Promise<Administradores> {
    return await this.db.sequelize.models['Administradores'].create(data)[0];
  }

  async update(
    id: number,
    data: Partial<Administradores>,
  ): Promise<Administradores> {
    await this.db.sequelize.models['Administradores'].update(data, {
      where: { id },
    });
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.db.sequelize.models['Administradores'].destroy({
      where: { id },
    });
  }
}
