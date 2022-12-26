import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { sentryInit } from '@nitro/frontend/sentry';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  sentryInit(environment);
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  // eslint-disable-next-line no-console,unicorn/prefer-top-level-await
  .catch((error) => console.error(error));
