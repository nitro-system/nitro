import { AppEnvironmentEnum } from '@nitro/shared/enums';

export const environment = {
  production: true,
  name: AppEnvironmentEnum.PRODUCTION,
  backendUrl: 'http://localhost:3000',
} as const;
