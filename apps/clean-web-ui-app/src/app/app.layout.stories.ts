import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import 'cwui-app-layout';
import { init } from 'cwui-app-layout';
import { BrowserModule } from '@angular/platform-browser';

init();

interface AppLayoutStoryProps {
  header: string;
  sidebar: string;
}

const AppLayoutTemplate: Story<AppLayoutStoryProps> = (args: AppLayoutStoryProps) => ({
  template: `<cwui-app-layout sidebar="${args.sidebar}" header="${args.header}">
    <header slot="header">
      <div style="padding: 10px;">Logo</div>
    </header>
    <aside slot="sidebar">
      <ul>
        <li>List item</li>
        <li>List item</li>
      </ul>
    </aside>
    <main >
      <div style="padding: 10px;">
        <h1>Content</h1>
        <p>Web Component providing a quick and easy way to get a common application layout structure done</p>
      </div>
    </main>
  </cwui-app-layout>`,
});

const appLayoutHeaderOptionTypes = ['on', 'off'];
const appLayoutSidebarOptions = ['expanded', 'collapsed', 'off'];
export default {
  title: 'AppLayout',
  decorators: [
    moduleMetadata({
      imports: [BrowserModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
  ],
  argTypes: {
    header: {
      description: 'Turn on/off the header',
      name: 'header',
      options: appLayoutHeaderOptionTypes,
      control: { type: 'select' },
    },
    sidebar: {
      description: 'Turn on/off the sidebar',
      name: 'sidebar',
      options: appLayoutSidebarOptions,
      control: { type: 'select' },
    },
  },
  args: {
    header: 'on',
    sidebar: 'expanded',
  },
} as Meta<any>;

export const AppLayout = AppLayoutTemplate.bind({});

AppLayout.args = {
  header: 'on',
  sidebar: 'expanded',
};
