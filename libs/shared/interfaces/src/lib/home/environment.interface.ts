import { AppEnvironmentEnum } from '@nitro/shared/enums';

export interface AppEnvironment {
  environment: AppEnvironmentEnum;
  production: boolean;
  version: string;
}
