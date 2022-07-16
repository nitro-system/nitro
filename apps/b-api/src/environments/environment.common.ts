import { commonWorkspaceEnv } from '@nitro/shared/constants';

export const commonEnv = {
  ...commonWorkspaceEnv,
  port: process.env.PORT || 3000,
} as const;
