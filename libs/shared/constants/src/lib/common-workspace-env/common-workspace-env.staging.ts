import { commonWorkspaceEnvCommon } from './common-workspace-env.common';

export const commonWorkspaceEnv = {
  ...commonWorkspaceEnvCommon,
  backendUrl: 'https://api.staging.nitro.ng-omar.com',
} as const;
