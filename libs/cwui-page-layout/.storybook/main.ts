import type { StorybookConfig } from '@storybook/web-components-vite';
// eslint-disable-next-line @nx/enforce-module-boundaries
import rootConfig from '../../../.storybook/main';

const config: StorybookConfig = {
  ...rootConfig,
  framework: {
    name: '@storybook/web-components-vite',
    options: {
      builder: {
        viteConfigPath: 'vite.config.ts',
      },
    },
  },
};

export default config;
