import type { Preview } from '@storybook/web-components-vite';

const preview: Preview = {
  // ...rest of preview
  //👇 Enables auto-generated documentation for all stories
  tags: ['autodocs'],
};

export default preview;
