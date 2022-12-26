import { commonWorkspaceEnvironmentCommon } from './common-workspace-environment.common';

export const commonWorkspaceEnvironment = {
  ...commonWorkspaceEnvironmentCommon,
  backendUrl: 'https://api.staging.nitro.ng-omar.com',
} as const;
