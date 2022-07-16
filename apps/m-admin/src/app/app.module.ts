import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { apiUrlInterceptorProvider } from '@nitro/shared/interceptors';
import { FrontendSentryModule } from '@nitro/frontend/sentry';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ...(environment.production ? [FrontendSentryModule] : []),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    apiUrlInterceptorProvider(environment.backendUrl),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
