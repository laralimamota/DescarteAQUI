import { ArgumentsHost, HttpException } from '@nestjs/common';
import { Request } from 'express';
import { BaseError } from 'sequelize';

export class BaseFilterLog {
  protected createFilterLogObject(
    exception: HttpException | BaseError,
    host: ArgumentsHost,
  ) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    let message;

    if (exception instanceof HttpException) {
      message = exception.message;
    } else if (exception instanceof BaseError) {
      message = exception.message;
    }

    return {
      message: message,
      error: exception,
      request: {
        body: request.body,
        params: request.params,
        query: request.query,
        userAgent: request.headers['user-agent'],
        origin: request.headers['origin'],
      },
    };
  }
}
