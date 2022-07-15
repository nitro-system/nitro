module.exports = {
  stories: [],
  addons: [
    '@storybook/addon-essentials',
    'storybook-addon-angular-router',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
  ],
  // uncomment the property below if you want to apply some webpack config globally
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs

  //   // Return the altered config
  //   return config;
  // },
};
