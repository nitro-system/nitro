import { AppEnvironmentEnum } from '@nitro/shared/enums';
import { commonEnv } from './environment.common';

export const environment = {
  production: true,
  name: AppEnvironmentEnum.PRODUCTION,
  backendUrl: 'http://143.244.158.57',
  ...commonEnv,
} as const;
