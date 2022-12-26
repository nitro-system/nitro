const project = process.env.PROJECT;

if (!project) throw new Error('PROJECT is required');

// eslint-disable-next-line @typescript-eslint/no-var-requires,global-require,import/no-dynamic-require
const { config } = require(`./apps/${project}/capacitor.config`) as {
  config: unknown;
};

export default config;
