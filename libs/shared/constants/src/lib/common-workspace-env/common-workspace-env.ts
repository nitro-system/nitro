import { commonWorkspaceEnvCommon } from './common-workspace-env.common';

export const commonWorkspaceEnv = {
  ...commonWorkspaceEnvCommon,
  backendUrl: `http://localhost:${commonWorkspaceEnvCommon.backendPort}`,
} as const;
