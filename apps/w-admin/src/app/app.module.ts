import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { apiUrlInterceptorProvider } from '@nitro/shared/interceptors';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrontendSentryModule } from '@nitro/frontend/sentry';
import { FrontendFooterModule } from '@nitro/frontend/footer';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ...(environment.production ? [FrontendSentryModule] : []),
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FrontendFooterModule,
  ],
  providers: [apiUrlInterceptorProvider(environment.backendUrl)],
  bootstrap: [AppComponent],
})
export class AppModule {}
