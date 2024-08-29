import { Module } from '@nestjs/common';
import { BetaConnection } from './database/connections/beta.connection';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [
    {
      provide: 'BETA_CONNECTION',
      useClass: BetaConnection,
    },
    JwtService,
  ],
  exports: ['BETA_CONNECTION', JwtService],
})
export class InfraModule {}
