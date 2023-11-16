import { HTMLAttributes, forwardRef } from 'react';
import { Icon } from 'icons';
import { Button } from '../Button';
import { theme } from './theme';
import { IconButton } from '../IconButton';
import { Size } from './types';
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

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  isOpen?: boolean;
  className?: string;
  disabledBackdrop?: boolean;
  size?: Size;
  onClose: () => void;
  onConfirm?: () => void;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      children,
      title,
      isOpen,
      className,
      size = 'md',
      disabledBackdrop = false,
      onClose,
      onConfirm = () => {},
      ...rest
    },
    ref,
  ) => {
    // 모달 배경 클릭 이벤트 컨트롤
    const handleOpenChange = (open: boolean) => {
      if (!open && disabledBackdrop) {
        onClose();
      }
    };

    // 모달의 내부 요소 (버튼, 헤더) 클릭시 이벤트 버블링 방지
    const stopPropagation = (e: React.MouseEvent) => {
      e.stopPropagation();
    };

    // 모달 가시성 관리
    const { context } = useFloating({
      open: isOpen,
      onOpenChange: handleOpenChange,
    });

    const click = useClick(context);
    const role = useRole(context);
    const dismiss = useDismiss(context, { outsidePressEvent: 'mousedown' });
    const { getFloatingProps } = useInteractions([click, role, dismiss]);

    // 모달 배경 클릭 이벤트 처리
    const handleBackdropClick = (e: React.MouseEvent) => {
      if (disabledBackdrop && onClose) {
        onClose();
      } else if (!disabledBackdrop) {
        stopPropagation(e);
      }
    };

    // 모달 닫기 버튼 핸들러
    const handleCloseButton = () => {
      if (onClose) {
        onClose();
      }
    };

    // 확인 버튼 핸들러
    const handleConfirmButton = () => {
      onConfirm();
    };

    return (
      <FloatingPortal>
        {isOpen && (
          <FloatingOverlay lockScroll css={theme.overlay} onClick={handleBackdropClick}>
            <FloatingFocusManager context={context}>
              <div
                css={[theme.container.base, theme.sizes[size].container]}
                {...getFloatingProps()}
                className={className}
                onClick={stopPropagation}
                ref={ref}
                {...rest}
              >
                {/* 헤더 */}
                <div css={theme.headerContainer}>
                  <div css={theme.headerTitleContainer}>
                    <h5>{title}</h5>
                  </div>
                  <IconButton onClick={handleCloseButton} css={theme.closeButton}>
                    <Icon name={'Cancel'} solid size={24} />
                  </IconButton>
                </div>
                {/* 본문 */}
                <div css={[theme.bodyContainer, theme.sizes[size].bodyContainer]}>{children}</div>
                {/* 바텀 버튼 */}
                <div css={[theme.bottomContainer]}>
                  <div css={[theme.buttonContainer]}>
                    <Button
                      type="button"
                      variant="text"
                      color="secondary"
                      size="md"
                      shape="circle"
                      onClick={handleCloseButton}
                    >
                      취소
                    </Button>
                  </div>
                  <div css={[theme.buttonContainer]}>
                    <Button
                      type="button"
                      variant="filled"
                      color="secondary"
                      size="md"
                      shape="circle"
                      onClick={handleConfirmButton}
                    >
                      확인
                    </Button>
                  </div>
                </div>
              </div>
            </FloatingFocusManager>
          </FloatingOverlay>
        )}
      </FloatingPortal>
    );
  },
);

Modal.displayName = 'Modal';
export default Modal;
