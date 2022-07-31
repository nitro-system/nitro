import { commonWorkspaceEnvCommon } from './common-workspace-env.common';

export const commonWorkspaceEnv = {
  ...commonWorkspaceEnvCommon,
  backendApiUrl: 'http://api.staging.nitro.ng-omar.com',
} as const;
