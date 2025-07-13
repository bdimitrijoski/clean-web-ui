import type { StorybookConfig } from '@storybook/web-components-vite';
// eslint-disable-next-line @nx/enforce-module-boundaries
import rootConfig from '../../../.storybook/main';

const config: StorybookConfig = {
  ...rootConfig,
  stories: ['../../**/src/lib/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
};

export default config;
