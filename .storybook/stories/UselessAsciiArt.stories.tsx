import type { Meta, StoryObj } from "@storybook/react-vite";

import { UselessAsciiArt } from "../../src";

const island = `
        __ _.--..--._ _
     .-' _/   _/\\_   \\_'-.
    |__ /   _/\\__/\\_   \\__|
       |___/\\_\\__/  \\___|
              \\__/
              \\__/       / \`\`_
               \\__/    0/      \`-\`_
                \\__/   |            \`'-_                                            
             ____\\__/__|_               \`'-_
       . - '             ' -.               \`-_    
      /                      \\                 \`-_     
~~~~~~~  ~~~~~ ~~~~~  ~~~ ~~~  ~~~~~~~~~~~~  ~~~~~ #{\`_///)__/)_.\`}
  ~~~   ~~~~~   ~!~~   ~~ ~  ~ ~ ~  ! ~~~~# ~~~~~~~~
`;

const islandAriaLabel =
  "ASCII art depicting a person fishing from an island which has a single palm tree";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/UselessAsciiArt",
  component: UselessAsciiArt,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof UselessAsciiArt>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const IslandFishingStory: Story = {
  args: {
    ariaLabel: islandAriaLabel,
    asciiArt: island,
    animation: "drop",
  },
};

export const GuitarStory: Story = {
  args: {
    ariaLabel: "ASCII art of a Gibson Les Paul Guitar",
    asciiArt: `
           ._.-..-._.
           | Gibson |
         0-| o    o |-0
           |        |
         0-| o    o |-0
           |        |
         0-| o    o |-0
           |        |
           '.      .'
             '____'
             |    |
             |    |
             |____|
             |    |
             |    |
             |____|
             |    |
             |    |
             |____|
             |    |
             |    |
             |----|
             |    |
             |____|
             |    |
             |____|
             |    |
             |____|
             |____|
             |____|
        _..--|____|       _
     .'      |____|      ' '
    .        |____|'.__.'   '
    :  (o)   ______         '
    '       |OOOOOO|       '
     '      |______|      '
      '                  '
       '                '
       :                :
       '                '
      '                  '
    .'       ______       '.
   '        |      |        '
  '         |OOOOOO|         '
 '          ________          '
.          (________)          .
:                              :
'           ________       o   '
 .         0________0   o      .
  .                        o  .
   .                    o    . 
    '.                     .'  Ryan S.
      '.._             _..'  Gibson Les Paul
          ^'--.....--'^ 
                8
    `,
  },
};

export const FlickerStory: Story = {
  args: {
    ariaLabel: islandAriaLabel,
    asciiArt: island,
    animation: "flicker",
  },
};

export const BlinkStory: Story = {
  args: {
    ariaLabel: islandAriaLabel,
    asciiArt: island,
    animation: "blink",
  },
};

export const WiggleStory: Story = {
  args: {
    ariaLabel: islandAriaLabel,
    asciiArt: island,
    animation: "wiggle",
  },
};

export const RainbowStory: Story = {
  args: {
    ariaLabel: islandAriaLabel,
    asciiArt: island,
    animation: "rainbow",
  },
};

export const CustomAnimationStory: Story = {
  args: {
    ariaLabel: islandAriaLabel,
    asciiArt: island,
    customAnimationCssClass: "mySuperCssAnimationClass",
  },
};
