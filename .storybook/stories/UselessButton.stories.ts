import type { Meta, StoryObj } from "@storybook/react-vite";

import { UselessButton } from "../../src";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/UselessButton",
  component: UselessButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: () => alert("run my onClick function") },
} satisfies Meta<typeof UselessButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: "UselessButton",
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: "UselessButton",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    label: "UselessButton",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    label: "UselessButton",
  },
};
