import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from 'ui';

const meta = {
  title: 'component/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: 'text', title: 'Confirm', isOpen: true },
};
