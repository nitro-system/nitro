import { IWorkspaceVersion } from '@nitro/shared/interfaces';

const packageJson = { version: '0.0.0' };
const { version: full } = packageJson;
const versionSplit = full.split('.');

export const workspaceVersion: IWorkspaceVersion = {
  full,
  major: +versionSplit[0],
  minor: +versionSplit[1],
  patch: +versionSplit[2],
  other: full.split('-')[1] ?? '',
};
