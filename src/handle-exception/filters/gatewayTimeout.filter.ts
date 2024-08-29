import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { ConnectionError } from 'sequelize';
import { Response } from 'express';
import { BaseFilterLog } from './baseLog.filter';
import { LoggerService } from '../../infra/logs/loggerService';

@Catch(ConnectionError)
export class GatewayTimeoutFilter
  extends BaseFilterLog
  implements ExceptionFilter
{
  constructor(private readonly loggerService: LoggerService) {
    super();
    this.loggerService.setContext(GatewayTimeoutFilter.name);
  }

  catch(exception: ConnectionError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const logMessage = this.createFilterLogObject(exception, host);

    this.loggerService.error(logMessage);

    response.status(HttpStatus.GATEWAY_TIMEOUT).json({
      message: logMessage.message,
      error: exception.name,
      statusCode: HttpStatus.GATEWAY_TIMEOUT,
    });
  }
}
