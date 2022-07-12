const project = process.env.PROJECT;

const { config } = require(`./apps/${project}/capacitor.config`);

export default config;
