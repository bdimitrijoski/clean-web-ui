import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import 'cwui-button';
import { init } from 'cwui-button';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { AppComponent } from './app.component';
import { action } from '@storybook/addon-actions';

init();

const themesOptionTypes = ['primary', 'raised', 'outlined', 'small', 'large'];
export default {
  title: 'Button',
  // component: DummyComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
  ],
  argTypes: {
    theme: {
      description: 'theme',
      name: 'theme',
      options: themesOptionTypes,
      control: { type: 'select' },
    },
  },
  args: {
    theme: 'primary',
  },
} as Meta<AppComponent>;

interface StoryProps {
  text: string;
  theme: string;
}

const Template: Story<StoryProps> = (args: StoryProps) => ({
  props: args,
  template: `<cwui-button theme="${args.theme}" >${args.text}</cwui-button>`,
});

export const Primary = Template.bind({});
Primary.args = {
  text: 'Test',
  theme: 'primary',
};
