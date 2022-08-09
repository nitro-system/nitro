import { commonWorkspaceEnvCommon } from './common-workspace-env.common';

export const commonWorkspaceEnv = {
  ...commonWorkspaceEnvCommon,
  backendUrl: 'https://api.production.nitro.ng-omar.com',
} as const;
