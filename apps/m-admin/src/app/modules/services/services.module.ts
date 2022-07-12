import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ServicesRoutingModule } from './services.routing';
import { ServicesPage } from './services.page';
import { ServicesService } from './services.service';

@NgModule({
  declarations: [ServicesPage],
  imports: [
    CommonModule,
    IonicModule,
    ServicesRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [ServicesService],
})
export class ServicesModule {}
