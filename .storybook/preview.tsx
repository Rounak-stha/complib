import React from 'react';

import type { Meta, Preview } from '@storybook/react';
import '../src/styles/global.css';

const withColorScheme: Meta['decorators'] = (Story, context) => {
  const { scheme } = context.globals; // 'light' | 'dark' | 'both'

  type ContainerProps = { dark?: boolean; children: React.ReactNode };
  function Container({ dark, children }: ContainerProps) {
    return <div className={`${dark && 'dark'} text w-full py-10 bg flex justify-center`}>{children}</div>;
  }

  switch (scheme) {
    case 'light':
      return (
        <Container>
          <Story />
        </Container>
      );
    case 'dark':
      return (
        <Container dark={true}>
          <Story />
        </Container>
      );
    default:
      return (
        <div className="w-full">
          <Container>
            <Story />
          </Container>
          <Container dark={true}>
            <Story />
          </Container>
        </div>
      );
  }
};

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [withColorScheme],
  parameters: {
    controls: {
      matchers: {
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',
  },
};

export const globalTypes = {
  scheme: {
    name: 'Scheme',
    description: 'Select Light or Dark theme for Component',
    defautValue: 'both',
    toolbar: {
      icon: 'mirror',
      items: ['both', 'light', 'dark'],
      dynamicTitle: true,
    },
  },
};

export default preview;
