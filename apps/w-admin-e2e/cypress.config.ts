import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset';
import path from 'node:path';
import url from 'node:url';

export default defineConfig({
  e2e: nxE2EPreset(path.dirname(url.fileURLToPath(import.meta.url))),
});
