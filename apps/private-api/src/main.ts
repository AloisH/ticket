/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { HttpStatus, Logger, ValidationPipe } from '@nestjs/common';

import { AppModule } from './app/app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      errorHttpStatusCode: HttpStatus.BAD_REQUEST,
    })
  );

  const port = process.env.PRIVATE_API_PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
