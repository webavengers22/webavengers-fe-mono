import {
  FloatingPortal,
  Placement,
  autoUpdate,
  flip,
  offset as fuiOffset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useMergeRefs,
} from '@floating-ui/react';
import React, {
  HTMLAttributes,
  ReactElement,
  ReactNode,
  cloneElement,
  forwardRef,
  useEffect,
  useState,
} from 'react';

export interface FloatingProps extends Omit<HTMLAttributes<HTMLDivElement>, 'placeholder'> {
  offset?: number;
  content?: ReactNode;
  placement?: Placement;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const Floating = forwardRef<HTMLDivElement, FloatingProps>(
  ({ offset = 5, content, placement, open, onOpenChange, children, ...rest }, ref) => {
    const [internalOpen, setInternalOpen] = useState(false);

    const defaultOpen = open ?? internalOpen;
    const defaultOnOpenChange = onOpenChange ?? setInternalOpen;

    const { x, y, reference, floating, strategy, refs, update, context } = useFloating({
      placement,
      open: defaultOpen,
      onOpenChange: defaultOnOpenChange,
      whileElementsMounted: autoUpdate,
      middleware: [fuiOffset(offset), shift(), flip({ mainAxis: false })],
    });

    const { getReferenceProps, getFloatingProps } = useInteractions([
      useClick(context, { enabled: true }),
      useDismiss(context),
    ]);

    const mergedRef = useMergeRefs([ref, floating]);
    const childMergedRef = useMergeRefs([ref, reference]);

    useEffect(() => {
      if (refs.reference.current && refs.floating.current && open) {
        return autoUpdate(refs.reference.current, refs.floating.current, update);
      }
      return () => {};
    }, [open, update, refs.reference, refs.floating]);

    return (
      <>
        {typeof children === 'string' ? (
          <span
            {...getReferenceProps({
              ref: childMergedRef,
            })}
          >
            {children}
          </span>
        ) : (
          cloneElement(children as ReactElement, {
            ...getReferenceProps({
              ...(children as ReactElement)?.props,
              ref: childMergedRef,
            }),
          })
        )}
        <FloatingPortal>
          {defaultOpen && (
            <div
              {...getFloatingProps({
                ...rest,
                ref: mergedRef,
                css: [],
                style: {
                  position: strategy,
                  top: y ?? '',
                  left: x ?? '',
                },
              })}
            >
              {content}
            </div>
          )}
        </FloatingPortal>
      </>
    );
  },
);
Floating.displayName = 'Floating';
