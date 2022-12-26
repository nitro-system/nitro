import * as Sentry from '@sentry/node';

export const sentryInit = (environment: {
  sentry: { dns: string };
  name: string;
  version: { full: string };
}): void =>
  Sentry.init({
    dsn: environment.sentry.dns,
    environment: environment.name,
    release: environment.version.full,
    tracesSampleRate: 1,
  });
