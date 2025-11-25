import type { Meta, StoryObj } from "@storybook/react-vite";

import { UselessPokemonCardPicker } from "../../src";

const meta = {
  title: "Example/UselessPokemonCardPicker",
  component: UselessPokemonCardPicker,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof UselessPokemonCardPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultStory: Story = {};
