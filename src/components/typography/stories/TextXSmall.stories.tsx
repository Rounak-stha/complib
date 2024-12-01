import type { Meta, StoryObj } from '@storybook/react';

import { TextXSmall } from '../text';

const meta = {
  title: 'typography/TextXSmall',
  component: TextXSmall,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof TextXSmall>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultHeading1: Story = {
  args: {
    text: 'This is a dummy text',
  },
};
