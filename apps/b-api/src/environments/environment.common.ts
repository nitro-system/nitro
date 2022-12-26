import { commonWorkspaceEnvironment } from '@nitro/shared/constants';

export const commonEnvironment = {
  ...commonWorkspaceEnvironment,
  port: process.env.PORT || 3000,
  sentry: {
    dns: 'https://959a35be97f341e1919f6df8ee0eb7cd@o1320748.ingest.sentry.io/6577528',
  } as const,
} as const;
