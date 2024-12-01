import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '../text';

const meta = {
  title: 'typography/Text',
  component: Text,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultHeading1: Story = {
  args: {
    text: 'This is a dummy text',
  },
};
