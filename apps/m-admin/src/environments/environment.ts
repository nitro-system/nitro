import { AppEnvironmentEnum } from '@nitro/shared/enums';

export const environment = {
  production: false,
  name: AppEnvironmentEnum.DEVELOPMENT,
  backendUrl: 'http://localhost:3000',
} as const;
