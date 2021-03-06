import { AppEnvironmentEnum } from '@nitro/shared/enums';
import { commonEnv } from './environment.common';

export const environment = {
  production: true,
  name: AppEnvironmentEnum.PRODUCTION,
  ...commonEnv,
} as const;
