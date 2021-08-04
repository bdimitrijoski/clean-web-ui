import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import 'cwui-app-layout';
import { init } from 'cwui-layouts';
import { BrowserModule } from '@angular/platform-browser';

init();

interface HorizontalLayoutStoryProps {
  spacing: string;
}

const HorizontalLayoutTemplate: Story<HorizontalLayoutStoryProps> = (args: HorizontalLayoutStoryProps) => ({
  template: `
  <style>
  /* For demonstration purposes only */
  .box {
    display: block;
    width: 50px;
    height: 50px;
    text-align:center;
    line-height: 50px;
    background: #f7f7f7;
    border: 1px solid #ccc;
  }
  </style>
  <cwui-vertical-layout style="width: 200px" spacing="${args.spacing}">
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
    <div class="box">Box 3</div>
    <div class="box">Box 4</div>
    <div class="box">Box 5</div>
    <div class="box">Box 6</div>
  </cwui-vertical-layout>`,
});

export default {
  title: 'HorizontalLayout',
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
    spacing: {
      description: 'Control the spacing (margin) between items',
      name: 'spacing',
      options: ['auto', 'no-spacing', 'spacing-s', 'spacing-m', 'spacing-l', 'spacing-xl'],
      control: { type: 'select' },
    },
  },
  args: {},
} as Meta<any>;

export const HorizontalLayout = HorizontalLayoutTemplate.bind({});

HorizontalLayout.args = {};
