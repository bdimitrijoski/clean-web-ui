import { CwToolbar } from './cwui-toolbar.component';
import { init } from '../init';
import { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta<typeof CwToolbar> = {
  title: 'Components/Toolbar',
  component: 'cwui-toolbar',
  render: (_args, _context) => {
    init();
    const continer = document.createElement('div');
    continer.innerHTML = `
  <cwui-toolbar theme="light" >

    <aside slot="left">
      <!-- Items here will be aligned left -->
      <div style="padding: 4px;">
      <button>Save</button>
      </div>
    </aside>
    <aside slot="right">
    <!-- Items here will be aligned right -->
     <div style="padding: 4px;">
      <button>Prev << </button>
      <button>Next >> </button>
      </div>
    </aside>
</cwui-toolbar>
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
