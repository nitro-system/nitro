import { Logger, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { sentryInit } from '@nitro/backend/sentry';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  if (environment.production) sentryInit(environment);

  app.enableCors({ origin: '*' });

  app.setGlobalPrefix('api');

  app.enableVersioning({ type: VersioningType.URI });

  await app.listen(environment.port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${environment.port}`
  );
  Logger.log(`Environment:  ${environment.name}`);
  Logger.log(`Port: ${environment.port}`);
}

// eslint-disable-next-line no-console, unicorn/prefer-top-level-await
bootstrap().catch((error) => console.log(error));
