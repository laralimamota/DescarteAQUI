import { Module } from '@nestjs/common';
import { UsuarioController } from './controller/usuario.controller';
import { UsuarioService } from './service/usuario.service';
import { UsuariosRepository } from './repository/usuario.repository';
import { InfraModule } from 'src/infra/infra.module';

@Module({
  imports: [InfraModule],
  controllers: [UsuarioController],
  providers: [UsuarioService, UsuariosRepository],
})
export class UsuarioModule {}
