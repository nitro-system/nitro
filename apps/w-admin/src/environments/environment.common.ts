import { commonWorkspaceEnvironment } from '@nitro/shared/constants';

export const commonEnvironment = {
  ...commonWorkspaceEnvironment,
  sentry: {
    dns: 'https://b3e238d8eaa24f7d84d24570e2016a24@o1320748.ingest.sentry.io/6577194',
  } as const,
} as const;
