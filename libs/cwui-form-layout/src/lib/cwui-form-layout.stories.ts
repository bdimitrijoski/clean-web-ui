import { CleanWebFormLayoutProps, CwFormLayout } from './cwui-form-layout.component';
import { init } from '../init';
import { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta<CleanWebFormLayoutProps> = {
  title: 'Components/Form Layout',
  component: 'cwui-form-layout',
  render: (args, _context) => {
    init();
    const continer = document.createElement('div');
    continer.innerHTML = `
<cwui-form-layout columns="${args.columns || 2}" >

    <cwui-form-item>Element 1</cwui-form-item>
    <cwui-form-item>Element 2</cwui-form-item>
    <cwui-form-item>Element 3</cwui-form-item>
    <cwui-form-item>Element 4</cwui-form-item>
    <cwui-form-item>Element 5</cwui-form-item>
</cwui-form-layout>
  `;
    return continer;
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const Primary: Story = {
  args: {
    columns: 2,
  },
};
