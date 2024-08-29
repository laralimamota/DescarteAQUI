import { Module } from '@nestjs/common';
import { UsuarioController } from './controller/usuario.controller';
import { UsuarioService } from './service/usuario.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Usuarios } from './entities/usuario.entity';

@Module({
  imports: [SequelizeModule.forFeature([Usuarios])],
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class UsuarioModule {}
