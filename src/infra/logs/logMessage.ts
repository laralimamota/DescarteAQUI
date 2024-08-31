interface responseParams {
  statusCode: number;
  body?: any;
}

export interface LogMessage {
  message: string | object;
  error?: any;
  response?: responseParams;
}
