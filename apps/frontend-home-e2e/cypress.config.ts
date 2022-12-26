import { defineConfig } from 'cypress';
import { nxE2EStorybookPreset } from '@nrwl/storybook/presets/cypress';
import path from 'node:path';
import url from 'node:url';

export default defineConfig({
  e2e: nxE2EStorybookPreset(path.dirname(url.fileURLToPath(import.meta.url))),
});
