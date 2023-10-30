import { FC, HTMLAttributes } from 'react';

import { theme } from './theme';

export interface EmptyProps extends HTMLAttributes<HTMLDivElement> {
  hideIcon?: boolean;
}

export const Empty: FC<EmptyProps> = ({ hideIcon = false, ...rest }) => {
  return (
    <div css={[theme.container]} {...rest}>
      <p css={theme.text}>데이터가 없습니다.</p>
    </div>
  );
};
