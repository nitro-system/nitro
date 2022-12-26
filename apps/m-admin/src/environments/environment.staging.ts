import { AppEnvironmentEnum } from '@nitro/shared/enums';
import { commonEnvironment } from './environment.common';

export const environment = {
  ...commonEnvironment,
  production: true,
  name: AppEnvironmentEnum.staging,
} as const;
