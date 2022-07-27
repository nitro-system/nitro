import { workspaceVersion } from '@nitro/shared/utils';

export const commonWorkspaceEnv = {
  version: workspaceVersion,
  backendApiPort: 3000,
} as const;
