import tsConfigPaths from 'vite-tsconfig-paths';

import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    {
      name: '@storybook/addon-essentials',
      options: {
        outline: false,
      },
    },
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  features: {
    backgroundsStoryGlobals: true,
  },
  viteFinal: async (config) => {
    config.plugins = [...(config.plugins ? config.plugins : []), tsConfigPaths()];
    return {
      ...config,
    };
  },
};
export default config;