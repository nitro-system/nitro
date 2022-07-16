import { Module } from '@nestjs/common';
import { BackendSentryModule } from '@nitro/backend/sentry';
import { environment } from '../environments/environment';

import { HomeModule } from './modules/home/home.module';
import { ServicesModule } from './modules/services/services.module';

@Module({
  imports: [
    ...(environment.production ? [BackendSentryModule] : []),
    HomeModule,
    ServicesModule,
  ],
})
export class AppModule {}
