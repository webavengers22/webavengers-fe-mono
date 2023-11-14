import { Modal, ModalProps } from './../../../packages/ui/components/Modal/index';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<ModalProps> = {
  title: 'component/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['md', 'lg'],
    },
  },
};

export default meta;

export const Primary: StoryObj<ModalProps> = {
  args: {
    children: 'This is the modal content',
    title: 'Confirm',
    isOpen: true,
    size: 'md',
    disabledBackdrop: false,
    // onClose: () => console.log('Modal closed'),
    onClose: () => {},
  },
};
