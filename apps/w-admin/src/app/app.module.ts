import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { apiUrlInterceptorProvider } from '@nitro/shared/interceptors';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [apiUrlInterceptorProvider(environment.backendUrl)],
  bootstrap: [AppComponent],
})
export class AppModule {}
