import { CleanWebUiButton } from './cwui-button.component';
import { init } from '../init';
import { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta<CleanWebUiButton> = {
  title: 'Components/Button',
  component: 'cwui-button',
  render: (args, _context) => {
    init();
    const continer = document.createElement('div');
    continer.innerHTML = `
<cwui-button type="${args.type || 'button'}" ${args.disabled ? 'disabled' : ''} theme="${args.theme}">Save</cwui-button>
  `;
    return continer;
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<CleanWebUiButton>;

export const Primary: Story = {
  args: {
    type: 'button',
    disabled: false,
    theme: 'primary',
  },
};
