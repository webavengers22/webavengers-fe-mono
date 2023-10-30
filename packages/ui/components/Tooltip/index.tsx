import 'twin.macro';

import {
  FloatingPortal,
  Placement,
  autoUpdate,
  flip,
  offset as fuiOffset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { motion } from 'framer-motion';
import { FC, HTMLAttributes, ReactNode, useState } from 'react';

import { theme } from './theme';

export interface TooltipProps extends Omit<HTMLAttributes<HTMLDivElement>, 'placeholder'> {
  offset?: number;
  contents?: ReactNode;
  placement?: Placement;
}

export const Tooltip: FC<TooltipProps> = ({
  offset = 1,
  placement = 'top',
  contents,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const { x, y, refs, strategy, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [
      fuiOffset(offset),
      flip({
        fallbackAxisSideDirection: 'start',
      }),
      shift(),
    ],
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, { move: false }),
    useFocus(context),
    useDismiss(context),
    useRole(context, { role: 'tooltip' }),
  ]);

  return (
    <>
      <span
        ref={refs.setReference}
        {...getReferenceProps()}
        tw="block cursor-pointer w-[inherit] h-[inherit] truncate"
      >
        {children}
      </span>
      <FloatingPortal>
        {isOpen && (
          <motion.div
            initial={{ translateY: 10 }}
            animate={{ translateY: 0 }}
            exit={{ translateY: 10 }}
            transition={{ duration: 0.2 }}
            ref={refs.setFloating}
            css={[theme.tooltip.base]}
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
            }}
            {...getFloatingProps()}
          >
            {contents}
          </motion.div>
        )}
      </FloatingPortal>
    </>
  );
};
