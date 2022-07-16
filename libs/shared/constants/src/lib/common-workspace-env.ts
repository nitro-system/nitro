import { workspaceVersion } from '@nitro/shared/utils';

export const commonWorkspaceEnv = {
  version: workspaceVersion,
} as const;
