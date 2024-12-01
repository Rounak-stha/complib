import type { Meta, StoryObj } from '@storybook/react';

import { TextLarge } from '../text';

const meta = {
  title: 'typography/TextLarge',
  component: TextLarge,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof TextLarge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultHeading1: Story = {
  args: {
    text: 'This is a dummy text',
  },
};
