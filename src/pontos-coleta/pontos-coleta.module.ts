import { Module } from '@nestjs/common';
import { PontosColeta } from './entities/pontos-coleta.entity';
import { PontosColetaController } from './controller/pontos-coleta.controller';
import { PontosColetaService } from './service/pontos-coleta.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([PontosColeta])],
  controllers: [PontosColetaController],
  providers: [PontosColetaService],
})
export class PontosColetaModule {}
