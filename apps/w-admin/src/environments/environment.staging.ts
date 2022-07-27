import { AppEnvironmentEnum } from '@nitro/shared/enums';
import { commonEnv } from './environment.common';

export const environment = {
  production: true,
  name: AppEnvironmentEnum.STAGING,
  backendUrl: `http://64.227.23.61:${commonEnv.backendApiPort}`,
  ...commonEnv,
} as const;
