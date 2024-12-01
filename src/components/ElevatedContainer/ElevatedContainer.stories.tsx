// eslint-disable-next-line
import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { ElevatedContainer as _ElevatedContainer } from './ElevatedContainer';
import { Heading1 } from '../typography/heading';
import { Text } from '../typography/text';

const meta = {
  title: 'components/ElevatedContainer',
  component: _ElevatedContainer,
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <Story
          args={{
            children: (
              <>
                <Heading1 text="This is an elevated container." />
                <div className="mt-2">
                  <Text text="Can be used as card" />
                </div>
              </>
            ),
          }}
        />
      );
    },
  ],
} satisfies Meta<typeof _ElevatedContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ElevatedContainer: Story = {
  args: {},
};
