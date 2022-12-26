/**
 * This file decorates the Angular CLI with the Nx CLI to enable features such as computation caching
 * and faster execution of tasks.
 *
 * It does this by:
 *
 * - Patching the Angular CLI to warn you in case you accidentally use the undecorated ng command.
 * - Symlinking the ng to nx command, so all commands run through the Nx CLI
 * - Updating the package.json postinstall script to give you control over this script
 *
 * The Nx CLI decorates the Angular CLI, so the Nx CLI is fully compatible with it.
 * Every command you run should work the same when using the Nx CLI, except faster.
 *
 * Because of symlinking you can still type `ng build/test/lint` in the terminal. The ng command, in this case,
 * will point to nx, which will perform optimizations before invoking ng. So the Angular CLI is always invoked.
 * The Nx CLI simply does some optimizations before invoking the Angular CLI.
 *
 * To opt out of this patch:
 * - Replace occurrences of nx with ng in your package.json
 * - Remove the script from your postinstall script in your package.json
 * - Delete and reinstall your node_modules
 */

const fs = require('node:fs');
const os = require('node:os');
const cp = require('node:child_process');

const isWindows = os.platform() === 'win32';
let output;
try {
  // eslint-disable-next-line global-require
  output = require('@nrwl/workspace').output;
} catch {
  // eslint-disable-next-line no-console
  console.warn(
    'Angular CLI could not be decorated to enable computation caching. Please ensure @nrwl/workspace is installed.'
  );
  // eslint-disable-next-line unicorn/no-process-exit
  process.exit(0);
}

/**
 * Symlink of ng to nx, so you can keep using `ng build/test/lint` and still
 * invoke the Nx CLI and get the benefits of computation caching.
 */
function symlinkNgCLItoNxCLI() {
  try {
    const ngPath = './node_modules/.bin/ng';
    const nxPath = './node_modules/.bin/nx';
    if (isWindows) {
      /**
       * This is the most reliable way to create symlink-like behavior on Windows.
       * Such that it works in all shells and works with npx.
       */
      // eslint-disable-next-line no-restricted-syntax
      for (const extension of ['', '.cmd', '.ps1']) {
        if (fs.existsSync(nxPath + extension))
          fs.writeFileSync(
            ngPath + extension,
            fs.readFileSync(nxPath + extension)
          );
      }
    } else {
      // If unix-based, symlink
      cp.execSync(`ln -sf ./nx ${ngPath}`);
    }
  } catch (error) {
    output.error({
      title: `Unable to create a symlink from the Angular CLI to the Nx CLI:${error.message}`,
    });
    throw error;
  }
}

try {
  symlinkNgCLItoNxCLI();
  // eslint-disable-next-line global-require
  require('nx/src/adapter/decorate-cli').decorateCli();
  output.log({
    title: 'Angular CLI has been decorated to enable computation caching.',
  });
} catch {
  output.error({
    title: 'Decoration of the Angular CLI did not complete successfully',
  });
}
