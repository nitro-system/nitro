import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FrontendHomeModule } from '@nitro/frontend/home';

import { HomeRoutingModule } from './home.routing';
import { HomePage } from './home.page';

@NgModule({
  declarations: [HomePage],
  imports: [CommonModule, IonicModule, HomeRoutingModule, FrontendHomeModule],
  providers: [],
})
export class HomeModule {}
