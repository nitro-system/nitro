import { commonWorkspaceEnvironment } from '@nitro/shared/constants';

export const commonEnvironment = {
  ...commonWorkspaceEnvironment,
  sentry: {
    dns: 'https://d82b8ad457aa45c184ffcf9d5c9e8ae8@o1320748.ingest.sentry.io/6577502',
  } as const,
} as const;
