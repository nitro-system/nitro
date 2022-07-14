import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ServicesComponent } from './services/services.component';
import { ServicesService } from './services/services.service';

@NgModule({
  declarations: [ServicesComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  providers: [ServicesService],
  exports: [ServicesComponent],
})
export class FrontendServicesModule {}
