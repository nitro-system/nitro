import { commonWorkspaceEnvCommon } from './common-workspace-env.common';

export const commonWorkspaceEnv = {
  ...commonWorkspaceEnvCommon,
  backendApiUrl: `http://localhost:${commonWorkspaceEnvCommon.backendApiPort}`,
} as const;
