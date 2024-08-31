import { Injectable, Scope } from '@nestjs/common';
import { LogMessage } from './logMessage';
import { RequestContext } from 'nestjs-request-context';
import index from './index';

interface requestParams {
  body?: any;
  params?: any;
  query?: any;
  userAgent?: any;
  origin?: string;
}

interface logMessageTrace extends LogMessage {
  traceId: string;
  context: string;
  path: string;
  user: string;
  token: string;
  request: requestParams;
}

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService {
  protected context: string;

  setContext(context: string) {
    this.context = context;
  }

  private createLogMessage(logMessage: LogMessage): logMessageTrace {
    if (!RequestContext.currentContext) {
      return {
        context: 'RequestContext.currentContext is null',
        request: {},
        token: 'null',
        user: 'null',
        path: 'null',
        traceId: 'null',
      } as logMessageTrace;
    }

    const traceId = RequestContext.currentContext.req['traceId'];
    const path = RequestContext.currentContext.req.url;
    const user = RequestContext.currentContext.req?.usuario?.loginsat || 'null';
    const token =
      RequestContext.currentContext.req.headers.authorization || 'null';
    const request: requestParams = {
      body: RequestContext.currentContext.req.body,
      params: RequestContext.currentContext.req.params,
      query: RequestContext.currentContext.req.query,
      origin: RequestContext.currentContext.req.origin,
    };
    return {
      ...logMessage,
      traceId,
      path,
      user,
      token,
      request,
      context: this.context,
    };
  }

  public log(logMessage: LogMessage): void {
    const { message, ...log } = this.createLogMessage(logMessage);
    index.info(message, log);
  }

  public error(logMessage: LogMessage): void {
    const { message, ...log } = this.createLogMessage(logMessage);
    index.error(message, log);
  }

  public warn(logMessage: LogMessage): void {
    const { message, ...log } = this.createLogMessage(logMessage);
    index.warn(message, log);
  }

  public verbose(logMessage: LogMessage): void {
    const { message, ...log } = this.createLogMessage(logMessage);
    index.verbose(message, log);
  }

  public debug(message: string): void {
    const traceId = RequestContext.currentContext.req['traceId'];
    index.debug(message, { traceId });
  }

  public silly(message: string): void {
    const traceId = RequestContext.currentContext.req['traceId'];
    index.silly(message, { traceId });
  }
}
