import type { Meta, StoryObj } from '@storybook/react';

import { Heading3 } from '../heading';

const meta = {
  title: 'typography/Heading3',
  component: Heading3,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof Heading3>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultHeading1: Story = {
  args: {
    text: 'This is a dummy text',
  },
};
