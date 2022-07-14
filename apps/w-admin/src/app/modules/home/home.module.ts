import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendHomeModule } from '@nitro/frontend/home';

import { HomeRoutingModule } from './home.routing';
import { HomePage } from './home.page';

@NgModule({
  declarations: [HomePage],
  imports: [CommonModule, HomeRoutingModule, FrontendHomeModule],
  providers: [],
})
export class HomeModule {}
