import { workspaceVersion } from '@nitro/shared/utils';

export const commonWorkspaceEnvCommon = {
  version: workspaceVersion,
  backendApiPort: 3000,
} as const;
