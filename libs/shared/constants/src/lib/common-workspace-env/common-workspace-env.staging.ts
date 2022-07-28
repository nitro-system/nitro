import { commonWorkspaceEnvCommon } from './common-workspace-env.common';

export const commonWorkspaceEnv = {
  ...commonWorkspaceEnvCommon,
  backendApiUrl: `http://206.81.12.81:${commonWorkspaceEnvCommon.backendApiPort}`,
} as const;
