import 'twin.macro';

import { ButtonHTMLAttributes, FC } from 'react';

import { theme } from '../theme';

interface PageButtonItemProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  value: number;
  onClick?: (page: number) => void;
}

const PageButtonItem: FC<PageButtonItemProps> = ({ children, value, onClick, ...rest }) => {
  return (
    <button
      type="button"
      css={[theme.item.base, theme.item.hover, theme.item.disabled]}
      onClick={() => onClick?.(value)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default PageButtonItem;
