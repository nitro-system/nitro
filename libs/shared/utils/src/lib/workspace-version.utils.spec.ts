import { workspaceVersion } from './workspace-version.utils';

describe('getWorkspaceVersion', () => {
  it('should work', () => {
    // Valid Value
    expect(workspaceVersion.full).toMatch(
      /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/
    );
    expect(typeof workspaceVersion.major).toBe('number');
    expect(typeof workspaceVersion.minor).toBe('number');
    expect(typeof workspaceVersion.patch).toBe('number');
    expect(workspaceVersion.major).toBeGreaterThanOrEqual(0);
    expect(workspaceVersion.minor).toBeGreaterThanOrEqual(0);
    expect(workspaceVersion.patch).toBeGreaterThanOrEqual(0);
  });
});
