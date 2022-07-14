/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.enableCors({ origin: '*' });

  app.setGlobalPrefix('api');

  app.enableVersioning({ type: VersioningType.URI });

  // eslint-disable-next-line no-console
  console.log(`Environment:  ${environment.name}`);

  // eslint-disable-next-line no-console
  console.log(`Port: ${environment.port}`);

  await app.listen(environment.port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${environment.port}`
  );
}

bootstrap();
