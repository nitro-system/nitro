import { workspaceVersion } from '@nitro/shared/utils';

export const commonWorkspaceEnvironmentCommon = {
  version: workspaceVersion,
  backendPort: 3000,
} as const;
