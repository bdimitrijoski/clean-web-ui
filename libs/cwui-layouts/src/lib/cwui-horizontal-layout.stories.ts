import { CwuiHorizontalLayout } from './cwui-horizontal-layout.component';
import { init } from '../init';
import { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta<CwuiHorizontalLayout> = {
  title: 'Components/Horizontal Layout',
  component: 'cwui-horizontal-layout',
  render: (_args, _context) => {
    init();
    const continer = document.createElement('div');
    continer.innerHTML = `
<cwui-horizontal-layout spacing="auto" >

    <div>Element 1</div>
    <div>Element 2</div>
    <div>Element 3</div>
    <div>Element 4</div>
</cwui-horizontal-layout>
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
