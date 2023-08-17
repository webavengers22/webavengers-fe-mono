import type { Meta, StoryObj } from '@storybook/react';

import { ImageCard } from 'ui';

const meta = {
  title: 'component/ImageCard',
  component: ImageCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ImageCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: 'test', title: 'test' },
};
