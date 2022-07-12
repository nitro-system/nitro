import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ServicesRoutingModule } from './services.routing';
import { ServicesPage } from './services.page';
import { ServicesService } from './services.service';

@NgModule({
  declarations: [ServicesPage],
  imports: [CommonModule, ServicesRoutingModule, ReactiveFormsModule],
  providers: [ServicesService],
})
export class ServicesModule {}
