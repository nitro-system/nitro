import { AppEnvironmentEnum } from '@nitro/shared/enums';
import { commonEnv } from './environment.common';

export const environment = {
  production: true,
  name: AppEnvironmentEnum.PRODUCTION,
  backendUrl: 'https://ns-production-b-api.herokuapp.com',
  ...commonEnv,
} as const;
