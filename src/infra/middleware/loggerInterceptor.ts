import {
  Injectable,
  NestInterceptor,
  CallHandler,
  ExecutionContext,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { Response } from 'express';
import { LoggerService } from '../logs/loggerService';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  constructor(private loggerService: LoggerService) {
    this.loggerService.setContext(LoggerInterceptor.name);
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    this.logRequest('Request Interceptor');

    return next.handle().pipe(
      tap((res) => {
        this.logResponse('Response Interceptor', context, res);
      }),
    );
  }

  private logRequest(message: string) {
    this.loggerService.log({
      message: message,
    });
  }

  private logResponse(message: string, context: ExecutionContext, res: any) {
    const response = context.switchToHttp().getResponse<Response>();
    this.loggerService.log({
      message: message,
      response: {
        body: res,
        statusCode: response.statusCode,
      },
    });
  }
}
