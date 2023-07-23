import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { FC, PropsWithChildren } from 'react';

import { Icon } from 'icons';

import { Button } from '../Button';
import { theme } from './theme';
import { IconButton } from '../IconButton';

export interface AlertProps extends PropsWithChildren {
  title?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Alert: FC<AlertProps> = ({ children, isOpen = false, title, onClose }) => {
  const { context } = useFloating({
    open: isOpen,
    onOpenChange: onClose,
  });

  const click = useClick(context);
  const role = useRole(context);
  const dismiss = useDismiss(context, { outsidePressEvent: 'mousedown' });

  const { getFloatingProps } = useInteractions([click, role, dismiss]);

  return (
    <FloatingPortal>
      {isOpen && (
        <FloatingOverlay lockScroll css={theme.overlay}>
          <FloatingFocusManager context={context}>
            <div css={[theme.container.base]} {...getFloatingProps()}>
              {/* Alert 헤더 영역 */}
              <div css={theme.headerContainer}>
                <div css={theme.headerTitleContainer}>
                  <h5>{title}</h5>
                </div>

                <IconButton onClick={onClose} css={theme.closeButton}>
                  <Icon name={'Cancel'} solid size={24} />
                </IconButton>
              </div>

              {/* Alert 바디 영역 */}
              <div css={[theme.bodyContainer]}>{children}</div>

              {/* Alert 바텀 영역 */}
              <div css={[theme.bottomContainer]}>
                <Button
                  type="button"
                  variant="filled"
                  color="secondary"
                  size="md"
                  onClick={onClose}
                >
                  확인
                </Button>
              </div>
            </div>
          </FloatingFocusManager>
        </FloatingOverlay>
      )}
    </FloatingPortal>
  );
};
