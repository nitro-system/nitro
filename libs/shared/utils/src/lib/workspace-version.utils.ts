import { WorkspaceVersion } from '@nitro/shared/interfaces';
import packageJson1, * as packageJson2 from 'package.json';

const full = (packageJson1 || packageJson2).version;
const versionSplit = full.split('.');

export const workspaceVersion: WorkspaceVersion = {
  full,
  major: +versionSplit[0],
  minor: +versionSplit[1],
  patch: +versionSplit[2],
  other: full.split('-')[1] ?? '',
};
