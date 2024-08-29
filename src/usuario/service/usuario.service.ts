import { Injectable } from '@nestjs/common';
import { Usuarios } from '../entities/usuario.entity';

@Injectable()
export class UsuarioService {
  async findAll(): Promise<Usuarios[]> {
    return Usuarios.findAll();
  }

  async findOne(id: number): Promise<Usuarios> {
    return Usuarios.findByPk(id);
  }

  async create(data: Usuarios): Promise<Usuarios> {
    return Usuarios.create(data);
  }

  async update(id: number, data: Usuarios): Promise<Usuarios> {
    await Usuarios.update(data, { where: { id } });
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await Usuarios.destroy({ where: { id } });
  }
}
