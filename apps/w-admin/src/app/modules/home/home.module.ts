import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing';
import { HomePage } from './home.page';
import { HomeService } from './home.service';

@NgModule({
  declarations: [HomePage],
  imports: [CommonModule, HomeRoutingModule],
  providers: [HomeService],
})
export class HomeModule {}
