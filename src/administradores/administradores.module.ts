import { Module } from '@nestjs/common';
import { AdministradoresController } from './controller/administradores.controller';
import { AdministradoresService } from './service/administradores.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Administradores } from './entities/administradore.entity';

@Module({
  imports: [SequelizeModule.forFeature([Administradores])],
  controllers: [AdministradoresController],
  providers: [AdministradoresService],
})
export class AdministradoresModule {}
