import { CleanWebUiAppLayout } from './cwui-app-layout.component';
import { init } from '../init';
import { Meta, StoryObj } from '@storybook/web-components-vite';
import { HeaderState, SidebarState } from './types';

const meta: Meta<CleanWebUiAppLayout> = {
  title: 'Components/App Layout',
  component: 'cwui-app-layout',
  render: (args, _context) => {
    init();
    const continer = document.createElement('div');
    continer.innerHTML = `
<cwui-app-layout theme="primary-sidebar" sidebar="${args.sidebar}" header="${args.header}">
    <header slot="header">
      <!-- Anything that you want to display in the header -->
      <div style="padding: 10px;">Logo</div>
    </header>
    <aside slot="sidebar">
      <!-- Anything that you want to display in the sidebar like menu items -->
      <ul>
        <li>List item</li>
        <li>List item</li>
      </ul>
    </aside>
    <main >
      <!-- Your main content -->
      <div style="padding: 10px;">
        <h1>Content</h1>
        <p>Web Component providing a quick and easy way to get a common application layout structure done</p>
      </div>
    </main>
</cwui-app-layout>
  `;
    return continer;
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<CleanWebUiAppLayout>;

export const Primary: Story = {
  args: {
    sidebar: SidebarState.expanded,
    header: HeaderState.on,
  },
};
