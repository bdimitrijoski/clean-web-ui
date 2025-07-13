import { CwSplitLayout } from './cwui-split-layout.component';
import { init } from '../init';
import { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta<typeof CwSplitLayout> = {
  title: 'Components/CwSplitLayout',
  component: 'cwui-split-layout',
  render: (_args, _context) => {
    init();
    const continer = document.createElement('div');
    continer.innerHTML = `
 <cwui-split-layout theme="primary-sidebar" sidebar="expanded" >

    <aside slot="sidebar">
      <!-- Anything that you want to display in the sidebar like menu items -->
      <ul>
        <li>List item</li>
        <li>List item</li>
      </ul>
    </aside>
    <main slot="content" >
      <!-- Your main content -->
      <div style="padding: 10px;">
        <h1>Content</h1>
        <p>Web Component providing a quick and easy way to get a common application layout structure done</p>
      </div>
    </main>
</cwui-split-layout>
  `;
    return continer;
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const Primary: Story = {
  args: {},
};
