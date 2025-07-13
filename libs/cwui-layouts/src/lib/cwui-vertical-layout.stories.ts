import { CwuiVerticalLayout } from './cwui-vertical-layout.component';
import { init } from '../init';
import { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta<CwuiVerticalLayout> = {
  title: 'Components/Vertical Layout',
  component: 'cwui-vertical-layout',
  render: (_args, _context) => {
    init();
    const continer = document.createElement('div');
    continer.innerHTML = `
<cwui-vertical-layout spacing="auto" >

    <div>Element 1</div>
    <div>Element 2</div>
    <div>Element 3</div>
    <div>Element 4</div>
</cwui-vertical-layout>
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
