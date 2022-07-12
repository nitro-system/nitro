/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.enableCors({ origin: '*' });

  app.setGlobalPrefix('api');

  app.enableVersioning({ type: VersioningType.URI });

  const port = process.env.APP_PORT || 3000;

  // eslint-disable-next-line no-console
  console.log(`APP_ENV:  ${process.env.APP_ENV}`);

  // eslint-disable-next-line no-console
  console.log(`APP_PORT: ${port}`);

  await app.listen(port);

  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap();
