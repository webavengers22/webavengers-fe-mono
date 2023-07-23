import type { Meta, StoryObj } from '@storybook/react';

import { Alert } from 'ui';

const meta = {
  title: 'component/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: 'test', title: 'test', isOpen: true },
};
