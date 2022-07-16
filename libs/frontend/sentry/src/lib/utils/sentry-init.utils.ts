import * as Sentry from '@sentry/angular';
import { BrowserTracing } from '@sentry/tracing';

export const sentryInit = (env: {
  sentry: { dns: string };
  backendUrl: string;
  name: string;
  version: { full: string };
}): void =>
  Sentry.init({
    dsn: env.sentry.dns,
    integrations: [
      new BrowserTracing({
        tracingOrigins: ['localhost', env.backendUrl],
        routingInstrumentation: Sentry.routingInstrumentation,
      }),
    ],
    environment: env.name,
    release: `${env.version.full}-${env.name}`,
    tracesSampleRate: 1.0,
  });
