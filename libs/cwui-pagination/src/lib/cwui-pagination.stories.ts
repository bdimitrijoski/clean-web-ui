import { CleanWebUiPagination } from './cwui-pagination.component';
import { init } from '../init';
import { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta<CleanWebUiPagination> = {
  title: 'Components/Pagination',
  component: 'cwui-pagination',
  render: (args, _context) => {
    init();
    const continer = document.createElement('div');
    continer.innerHTML = `
 <cwui-pagination page="${args.page}" total="${args.total}"></cwui-pagination>
  `;
    return continer;
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const Primary: Story = {
  args: {
    page: 2,
    total: 100,
  },
};
