import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { DatabaseConnection } from '../config/databaseConnection.config';
import { ConfigService } from '@nestjs/config';
import { PontosColeta } from 'src/pontos-coleta/repository/entities/pontos-coleta.entity';
import { Usuario } from 'src/usuario/repository/entities/usuario.entity';

@Injectable()
export class BetaConnection extends DatabaseConnection {
  public sequelize: Sequelize;

  constructor(private configService: ConfigService) {
    const host = configService.get<string>('BETA.DATABASE.HOST');
    const port = configService.get<number>('BETA.DATABASE.PORT');
    const username = configService.get<string>('BETA.DATABASE.USER');
    const password = configService.get<string>('BETA.DATABASE.PASSWORD');
    const database = configService.get<string>('BETA.DATABASE.DATABASE');

    super(host, port, username, password, database);

    this.sequelize = new Sequelize({
      dialect: 'postgres',
      host: this.host,
      port: this.port,
      username: this.username,
      password: this.password,
      database: this.database,
      models: [Usuario, PontosColeta],
      logging: false,
    });
    this.connect();
  }

  async connect(): Promise<void> {
    try {
      await this.sequelize.authenticate();
      this.logger.log('BD CONECTADO COM SUCESSO.');
    } catch (err) {
      this.logger.error('Erro conectar com a BETA:', err);
    }
  }

  async query(sql: string, params?: any[]): Promise<any> {
    const [results] = await this.sequelize.query(sql, { replacements: params });
    return results;
  }
}
