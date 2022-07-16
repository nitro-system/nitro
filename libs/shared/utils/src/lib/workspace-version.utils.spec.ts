import { workspaceVersion } from './workspace-version.utils';

describe('getWorkspaceVersion', () => {
  it('should work', () => {
    // Valid Value
    expect(workspaceVersion.full).toBeInstanceOf(String);
    expect(workspaceVersion.major).toBeInstanceOf(Number);
    expect(workspaceVersion.minor).toBeInstanceOf(Number);
    expect(workspaceVersion.patch).toBeInstanceOf(Number);

    // Invalid Value
    expect(workspaceVersion.full).toBeInstanceOf(Number);
    expect(workspaceVersion.major).toBeInstanceOf(String);
    expect(workspaceVersion.minor).toBeInstanceOf(String);
    expect(workspaceVersion.patch).toBeInstanceOf(String);
  });
});
