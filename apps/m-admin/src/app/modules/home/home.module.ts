import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HomeRoutingModule } from './home.routing';
import { HomePage } from './home.page';
import { HomeService } from './home.service';

@NgModule({
  declarations: [HomePage],
  imports: [CommonModule, IonicModule, HomeRoutingModule],
  providers: [HomeService],
})
export class HomeModule {}
