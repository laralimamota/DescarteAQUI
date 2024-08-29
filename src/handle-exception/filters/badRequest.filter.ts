import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  BadRequestException,
} from '@nestjs/common';
import { Response } from 'express';
import { LoggerService } from '../../infra/logs/loggerService';
import { BaseFilterLog } from './baseLog.filter';

@Catch(BadRequestException)
export class BadRequestFilter extends BaseFilterLog implements ExceptionFilter {
  constructor(private readonly loggerService: LoggerService) {
    super();
    this.loggerService.setContext(BadRequestFilter.name);
  }

  catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    const logMessage = this.createFilterLogObject(exception, host);

    this.loggerService.error(logMessage);

    response.status(status).json(exception.getResponse());
  }
}
