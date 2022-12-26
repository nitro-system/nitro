import { commonWorkspaceEnvironmentCommon } from './common-workspace-environment.common';

export const commonWorkspaceEnvironment = {
  ...commonWorkspaceEnvironmentCommon,
  backendUrl: 'https://api.production.nitro.ng-omar.com',
} as const;
