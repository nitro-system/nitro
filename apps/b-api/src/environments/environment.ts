import { AppEnvironmentEnum } from '@nitro/shared/enums';
import { commonEnv } from './environment.common';

export const environment = {
  production: false,
  name: AppEnvironmentEnum.DEVELOPMENT,
  ...commonEnv,
} as const;
