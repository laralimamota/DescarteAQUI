import {
  Catch,
  ArgumentsHost,
  NotFoundException,
  ExceptionFilter,
} from '@nestjs/common';
import { Response } from 'express';
import { LoggerService } from '../../infra/logs/loggerService';
import { BaseFilterLog } from './baseLog.filter';

@Catch(NotFoundException)
export class NotFoundFilter extends BaseFilterLog implements ExceptionFilter {
  constructor(private readonly loggerService: LoggerService) {
    super();
    this.loggerService.setContext(NotFoundFilter.name);
  }

  catch(exception: NotFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    const logMessage = this.createFilterLogObject(exception, host);

    this.loggerService.error(logMessage);

    response.status(status).json(exception.getResponse());
  }
}
