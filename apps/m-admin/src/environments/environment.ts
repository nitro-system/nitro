import { AppEnvironmentEnum } from '@nitro/shared/enums';
import { commonEnv } from './environment.common';

export const environment = {
  ...commonEnv,
  production: false,
  name: AppEnvironmentEnum.DEVELOPMENT,
} as const;
