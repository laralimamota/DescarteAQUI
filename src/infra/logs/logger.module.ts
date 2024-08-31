import { Module, Global } from '@nestjs/common';
import { LoggerService } from './loggerService';

@Global()
@Module({
  providers: [LoggerService],
  exports: [LoggerService],
})
export class LoggerModule {}
