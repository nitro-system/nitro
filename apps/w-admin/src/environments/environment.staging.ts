import { AppEnvironmentEnum } from '@nitro/shared/enums';
import { commonEnv } from './environment.common';

export const environment = {
  production: true,
  name: AppEnvironmentEnum.STAGING,
  backendUrl: 'https://ns-staging-b-api.herokuapp.com',
  ...commonEnv,
} as const;
