import { AppEnvironmentEnum } from '@nitro/shared/enums';

export interface IAppEnvironment {
  environment: AppEnvironmentEnum;
  production: boolean;
  version: string;
}
