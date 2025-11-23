import type { Meta, StoryObj } from "@storybook/react-vite";

import { UselessNumberInput } from "../../src";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/UselessNumberInput",
  component: UselessNumberInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof UselessNumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const NoLimitsStory: Story = {
  args: {
    label: "no limit",
  },
};

export const MaxStory: Story = {
  args: {
    label: "max = 3",
    max: 3,
  },
};

export const MinStory: Story = {
  args: {
    label: "min = -3",
    min: -3,
  },
};

export const RangeStory: Story = {
  args: {
    label: "min = -3, max = 3",
    min: -3,
    max: 3,
  },
};
