import type { Meta, StoryObj } from '@storybook/react';

import { Heading1 } from '../heading';

const meta = {
  title: 'typography/Heading1',
  component: Heading1,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof Heading1>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultHeading1: Story = {
  args: {
    text: 'This is a dummy text',
  },
};
