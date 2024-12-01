import type { Meta, StoryObj } from '@storybook/react';

import { Heading2 } from '../heading';

const meta = {
  title: 'typography/Heading2',
  component: Heading2,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof Heading2>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultHeading1: Story = {
  args: {
    text: 'This is a dummy text',
  },
};
