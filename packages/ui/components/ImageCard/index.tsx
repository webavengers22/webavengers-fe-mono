import tw from 'twin.macro';

import { FC, HTMLAttributes, ReactNode, useRef } from 'react';

import { theme } from './theme';

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: ReactNode;
  hideBottom?: boolean;
  src?: string;
  alt?: string;
}

export const ImageCard: FC<CardProps> = ({
  title,
  hideBottom = false,
  src = '',
  children,
  alt = '',
  ...rest
}) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div ref={ref} css={[theme.container.base]} {...rest}>
      {/* 헤더 */}
      <img alt={alt} src={src} />
      {!hideBottom && (
        <div css={[theme.header.base]}>
          <title>{title}</title>
          <p>{title}</p>
        </div>
      )}

      {/* 바디 */}
      <div css={[theme.body.base]}>{children}</div>
    </div>
  );
};
