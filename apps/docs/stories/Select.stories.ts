import type { Meta, StoryObj } from '@storybook/react';
import { Select } from 'ui';
const meta = {
  title: 'component/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'select',
    options: [
      { value: 'value1', label: 'label1' },
      { value: 'value2', label: 'label2' },
    ],
  },
};
