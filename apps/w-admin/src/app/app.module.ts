import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { apiUrlInterceptorProvider } from '@nitro/shared/interceptors';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { sentryProviders } from '@nitro/shared/utils';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    apiUrlInterceptorProvider(environment.backendUrl),
    // ...sentryProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
