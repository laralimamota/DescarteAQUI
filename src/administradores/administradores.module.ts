import { Module } from '@nestjs/common';
import { AdministradoresController } from './controller/administradores.controller';
import { AdministradoresService } from './service/administradores.service';
import { InfraModule } from 'src/infra/infra.module';
import { AdministradoresRepository } from './repository/administradores.repository';

@Module({
  imports: [InfraModule],
  controllers: [AdministradoresController],
  providers: [AdministradoresService, AdministradoresRepository],
})
export class AdministradoresModule {}
