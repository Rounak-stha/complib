import type { Meta, StoryObj } from '@storybook/react';

import { Heading4 } from '../heading';

const meta = {
  title: 'typography/Heading4',
  component: Heading4,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof Heading4>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultHeading1: Story = {
  args: {
    text: 'This is a dummy text',
  },
};
