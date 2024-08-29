import { Injectable } from '@nestjs/common';
import { PontosColeta } from '../entities/pontos-coleta.entity';

@Injectable()
export class PontosColetaService {
  async findAll(): Promise<PontosColeta[]> {
    return PontosColeta.findAll();
  }

  async findOne(id: number): Promise<PontosColeta> {
    return PontosColeta.findByPk(id);
  }

  async create(data: PontosColeta): Promise<PontosColeta> {
    return PontosColeta.create(data);
  }

  async update(id: number, data: PontosColeta): Promise<PontosColeta> {
    await PontosColeta.update(data, { where: { id } });
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await PontosColeta.destroy({ where: { id } });
  }
}
