import { NgModule } from '@angular/core';
import { sentryProviders } from './utils/sentry-providers.utils';

@NgModule({
  providers: [...sentryProviders],
})
export class FrontendSentryModule {}
