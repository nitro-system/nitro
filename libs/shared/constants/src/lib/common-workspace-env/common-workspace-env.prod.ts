import { commonWorkspaceEnvCommon } from './common-workspace-env.common';

export const commonWorkspaceEnv = {
  ...commonWorkspaceEnvCommon,
  backendApiUrl: 'http://api.production.nitro.ng-omar.com',
} as const;
