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
import React, { FC, PropsWithChildren, useRef } from 'react';
import { Icon } from 'icons';
import { Button } from '../Button';
import { theme } from './theme';
import { IconButton } from '../IconButton';

export interface ModalProps extends PropsWithChildren {
  title?: string;
  isOpen?: boolean;
  className?: string; // 커스텀 클래스명
  disabledBackdrop?: boolean; // 모달 배경 클릭 이벤트 여부
  onClose?: () => void;
}

export const Modal: FC<ModalProps> = ({
  children,
  isOpen = false,
  title,
  onClose,
  disabledBackdrop,
  className,
}) => {
  const { context } = useFloating({
    open: isOpen,
    onOpenChange: onClose,
  });

  const click = useClick(context);
  const role = useRole(context);
  const dismiss = useDismiss(context, { outsidePressEvent: 'mousedown' });

  const { getFloatingProps } = useInteractions([click, role, dismiss]);

  // 취소 버튼 클릭시
  const handleCancel = () => {
    console.log('취소');
    onClose?.();
  };

  // 확인 버튼 클릭시
  const handleConfirm = () => {
    console.log('확인');
    onClose?.();
  };

  // 모달 배경 클릭 이벤트 여부
  const handleBackdropClick = () => {
    console.log('disabledBackdrop', disabledBackdrop);
    if (!disabledBackdrop) {
      onClose?.();
    }
  };

  const myRef = useRef(null);

  return (
    <FloatingPortal>
      {isOpen && (
        <FloatingOverlay lockScroll css={theme.overlay}>
          <FloatingFocusManager context={context}>
            <div
              css={[theme.container.base]}
              {...getFloatingProps()}
              onClick={handleBackdropClick}
              className={className}
              ref={myRef}
            >
              {/* 헤더 영역 */}
              <div css={theme.headerContainer}>
                <div css={theme.headerTitleContainer}>
                  <h5>{title}</h5>
                </div>

                <IconButton onClick={onClose} css={theme.closeButton}>
                  <Icon name={'Cancel'} solid size={24} />
                </IconButton>
              </div>

              {/* 바디 영역 */}
              <div css={[theme.bodyContainer]}>{children}</div>

              {/* 바텀 영역 */}
              <div css={[theme.bottomContainer]}>
                <div css={[theme.buttonContainer]}>
                  <Button
                    type="button"
                    variant="text"
                    color="secondary"
                    size="md"
                    shape="circle"
                    onClick={handleCancel}
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
                    onClick={handleConfirm}
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
};
Modal.displayName = 'Modal';
