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
  args: {
    title: '입력한 타이틀 노출 텍스트...',
    date: '22.08.26 - 22.09.04',
  },
};
