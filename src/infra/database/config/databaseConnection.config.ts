import { Logger } from '@nestjs/common';

export abstract class DatabaseConnection {
  constructor(
    protected host: string,
    protected port: number,
    protected username: string,
    protected password: string,
    protected database: string,
  ) {}

  protected readonly logger = new Logger(this.database);

  abstract connect(): Promise<void>;
  abstract query(sql: string, params?: any[]): Promise<any>;
}
