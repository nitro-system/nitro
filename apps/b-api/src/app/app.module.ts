import { Module } from '@nestjs/common';
import { BackendSentryModule } from '@nitro/backend/sentry';

import { HomeModule } from './modules/home/home.module';
import { ServicesModule } from './modules/services/services.module';

@Module({ imports: [BackendSentryModule, HomeModule, ServicesModule] })
export class AppModule {}
