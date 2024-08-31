import { Injectable } from '@nestjs/common';
import { Usuario } from '../repository/entities/usuario.entity';

@Injectable()
export class UsuarioService {
  async findAll(): Promise<Usuario[]> {
    return Usuario.findAll();
  }

  async findOne(id: number): Promise<Usuario> {
    return Usuario.findByPk(id);
  }

  async create(data: Usuario): Promise<Usuario> {
    return Usuario.create(data);
  }

  async update(id: number, data: Usuario): Promise<Usuario> {
    await Usuario.update(data, { where: { id } });
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await Usuario.destroy({ where: { id } });
  }
}
