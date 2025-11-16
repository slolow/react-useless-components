import type { Meta, StoryObj } from "@storybook/react-vite";

import { UselessButton, UselessTooltip } from "../../src";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/UselessTooltip",
  decorators: [
    (Story) => (
      <div style={{ padding: "50px" }}>
        <Story />
      </div>
    ),
  ],
  component: UselessTooltip,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: { children: <UselessButton label={"Hover over me"} size={"lg"} /> },
} satisfies Meta<typeof UselessTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultStory: Story = {};
