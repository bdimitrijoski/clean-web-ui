import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import 'cwui-app-layout';
import { init } from 'cwui-pagination';
import { BrowserModule } from '@angular/platform-browser';

init();

interface PaginationStoryProps {
  page: number;
  total: number;
}

const PaginationTemplate: Story<PaginationStoryProps> = (args: PaginationStoryProps) => ({
  template: `<cwui-pagination page="${args.page}" total="${args.total}"></cwui-pagination>`,
});

export default {
  title: 'Pagination',
  decorators: [
    moduleMetadata({
      imports: [BrowserModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
  ],
  parameters: {
    docs: {
      page: null,
    },
  },
  argTypes: {
    page: {
      description: 'Current page number',
      name: 'page',
      control: { type: 'number' },
    },
    total: {
      description: 'Total number of results',
      name: 'total',
      control: { type: 'number' },
    },
  },
  args: {
    page: 1,
    total: 20,
  },
} as Meta<any>;

export const Pagination = PaginationTemplate.bind({});

Pagination.args = {
  page: 1,
  total: 20,
};

Pagination.parameters = {
  actions: {
    handles: ['sidebar-opened-changed', 'header-visibility-changed'],
  },
};
