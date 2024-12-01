import type { Meta, StoryObj } from '@storybook/react';

import { TextSmall } from '../text';

const meta = {
  title: 'typography/TextSmall',
  component: TextSmall,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof TextSmall>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultHeading1: Story = {
  args: {
    text: 'This is a dummy text',
  },
};
