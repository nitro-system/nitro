import { AppEnvironmentEnum } from '@nitro/shared/enums';
import { commonEnv } from './environment.common';

export const environment = {
  ...commonEnv,
  production: true,
  name: AppEnvironmentEnum.PRODUCTION,
} as const;
