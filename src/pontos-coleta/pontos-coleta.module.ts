import { Module } from '@nestjs/common';
import { PontosColetaController } from './controller/pontos-coleta.controller';
import { PontosColetaService } from './service/pontos-coleta.service';
import { PontosColetaRepository } from './repository/pontos-coleta.repository';
import { InfraModule } from 'src/infra/infra.module';

@Module({
  imports: [InfraModule],
  controllers: [PontosColetaController],
  providers: [PontosColetaService, PontosColetaRepository],
})
export class PontosColetaModule {}
