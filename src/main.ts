import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { UnauthorizedFilter } from './handle-exception/filters/unauthorized.filter';
import { NotFoundFilter } from './handle-exception/filters/notFound.filter';
import { GatewayTimeoutFilter } from './handle-exception/filters/gatewayTimeout.filter';
import { ConflictFilter } from './handle-exception/filters/conflict.filter';
import { BadRequestFilter } from './handle-exception/filters/badRequest.filter';
import { LoggerService } from './infra/logs/loggerService';
import { AllExceptionsFilter } from './handle-exception/filters/allException.filter';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AllExceptionsFilter(new LoggerService()));
  app.useGlobalFilters(
    new BadRequestFilter(new LoggerService()),
    new ConflictFilter(new LoggerService()),
    new GatewayTimeoutFilter(new LoggerService()),
    new NotFoundFilter(new LoggerService()),
    new UnauthorizedFilter(new LoggerService()),
  );
  dotenv.config({
    path: `${process.cwd()}/config/env/${process.env.NODE_ENV || 'dev'}.env`,
  });

  const configSwagger = new DocumentBuilder()
    .setTitle('')
    .setDescription('')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('beta', app, document);

  await app.listen(3000);
}
bootstrap();
