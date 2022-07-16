import * as Sentry from '@sentry/node';

export const sentryInit = (env: {
  sentry: { dns: string };
  name: string;
  version: { full: string };
}): void =>
  Sentry.init({
    dsn: env.sentry.dns,
    environment: env.name,
    release: env.version.full,
    tracesSampleRate: 1.0,
  });
