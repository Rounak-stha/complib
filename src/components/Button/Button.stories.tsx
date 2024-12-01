import type { Meta, StoryObj } from '@storybook/react';

import { Button, type ButtonProps } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    backgrounds: {
      value: 'Dark',
    },
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'disabled'],
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: ButtonProps = {};

export const DefaultButton: Story = {
  args: {
    ...defaultProps,
    children: 'Click Me!',
  },
};

export const OutlinedButton: Story = {
  args: {
    ...defaultProps,
    children: 'Click Me!',
    variant: 'outline',
  },
};

export const DisabledButton: Story = {
  args: {
    ...defaultProps,
    children: 'Click Me!',
    variant: 'disabled',
  },
};
