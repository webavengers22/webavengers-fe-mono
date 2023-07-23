import { useCallback, useState } from 'react';

export const useAert = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const onOpen = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => {
    setIsOpen(false);
    setMessage(null);
  }, []);
  return { isOpen, onOpen, onClose, message, setMessage };
};
