import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { UselessButton } from './UselessButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/UselessButton',
  component: UselessButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof UselessButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'UselessButton',
  },
};

export const Secondary: Story = {
  args: {
    label: 'UselessButton',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'UselessButton',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'UselessButton',
  },
};
