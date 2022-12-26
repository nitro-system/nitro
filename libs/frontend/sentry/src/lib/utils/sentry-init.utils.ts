import * as Sentry from '@sentry/angular';
import { BrowserTracing } from '@sentry/tracing';

export const sentryInit = (environment: {
  sentry: { dns: string };
  backendUrl: string;
  name: string;
  version: { full: string };
}): void =>
  Sentry.init({
    dsn: environment.sentry.dns,
    integrations: [
      new BrowserTracing({
        tracingOrigins: ['localhost', environment.backendUrl],
        routingInstrumentation: Sentry.routingInstrumentation,
      }),
    ],
    environment: environment.name,
    release: environment.version.full,
    tracesSampleRate: 1,
  });
