import { commonWorkspaceEnvironmentCommon } from './common-workspace-environment.common';

export const commonWorkspaceEnvironment = {
  ...commonWorkspaceEnvironmentCommon,
  backendUrl: `http://localhost:${commonWorkspaceEnvironmentCommon.backendPort}`,
} as const;
