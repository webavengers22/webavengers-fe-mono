import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from 'ui';

const meta = {
  title: 'component/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { label: 'test' },
};
