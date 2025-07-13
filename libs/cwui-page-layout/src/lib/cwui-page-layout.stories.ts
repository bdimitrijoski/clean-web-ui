import { CwPageLayout } from './cwui-page-layout.component';
import { init } from '../init';
import { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta<CwPageLayout> = {
  title: 'Components/CwPageLayout',
  component: 'cwui-page-layout',
  render: (args, _context) => {
    init();
    const continer = document.createElement('div');
    continer.innerHTML = `
<cwui-page-layout theme="primary-sidebar" sidebar="expanded" header="on">
    <header slot="header">
      <!-- Anything that you want to display in the header -->
      <div style="padding: 10px;">Logo</div>
    </header>

    <main >
      <!-- Your main content -->
      <div style="padding: 10px;">
        <h1>Content</h1>
        <p>Web Component providing a quick and easy way to get a common application layout structure done</p>
      </div>
    </main>

    <aside slot="appbar">
      <!-- Anything that you want to display in the sidebar like menu items -->
      <button>Save</button>
    </aside>
</cwui-page-layout>
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
