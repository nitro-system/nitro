import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FrontendServicesModule } from '@nitro/frontend/services';

import { ServicesRoutingModule } from './services.routing';
import { ServicesPage } from './services.page';

@NgModule({
  declarations: [ServicesPage],
  imports: [
    CommonModule,
    IonicModule,
    ServicesRoutingModule,
    FrontendServicesModule,
  ],
})
export class ServicesModule {}
