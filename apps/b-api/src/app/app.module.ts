import { Module } from '@nestjs/common';

import { HomeModule } from './modules/home/home.module';
import { ServicesModule } from './modules/services/services.module';

@Module({ imports: [HomeModule, ServicesModule] })
export class AppModule {}
