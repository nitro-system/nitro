import { APP_INITIALIZER, ErrorHandler, Provider } from '@angular/core';
import { Router } from '@angular/router';
import * as Sentry from '@sentry/angular';

export const sentryProviders: Provider[] = [
  {
    provide: ErrorHandler,
    useValue: Sentry.createErrorHandler({ showDialog: true }),
  },
  { provide: Sentry.TraceService, deps: [Router] },
  {
    provide: APP_INITIALIZER,
    useFactory: () => () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
    deps: [Sentry.TraceService],
    multi: true,
  },
];
