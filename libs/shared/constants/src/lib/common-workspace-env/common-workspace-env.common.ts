import { workspaceVersion } from '@nitro/shared/utils';

export const commonWorkspaceEnvCommon = {
  version: workspaceVersion,
  backendPort: 3000,
} as const;
