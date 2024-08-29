import { Injectable } from '@nestjs/common';
import { Administradores } from '../entities/administradore.entity';

@Injectable()
export class AdministradoresService {
  async findAll(): Promise<Administradores[]> {
    return Administradores.findAll();
  }

  async findOne(id: number): Promise<Administradores> {
    return Administradores.findByPk(id);
  }

  async create(data: Administradores): Promise<Administradores> {
    return Administradores.create(data);
  }

  async update(id: number, data: Administradores): Promise<Administradores> {
    await Administradores.update(data, { where: { id } });
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await Administradores.destroy({ where: { id } });
  }
}
