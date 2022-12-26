import { AppEnvironmentEnum } from '@nitro/shared/enums';
import { commonEnvironment } from './environment.common';

export const environment = {
  ...commonEnvironment,
  production: false,
  name: AppEnvironmentEnum.development,
} as const;
