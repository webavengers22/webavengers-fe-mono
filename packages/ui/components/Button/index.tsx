import { ButtonHTMLAttributes, forwardRef } from 'react';

import { theme } from './theme';
import { Color, Size, Variant } from './types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  variant?: Variant;
  size?: Size;
  color?: Color;
  circle?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      fullWidth = false,
      variant = 'filled',
      size = 'md',
      color = 'black',
      circle = false,
      ...rest
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        css={[
          theme.base,
          theme.variants[variant].base,
          theme.variants[variant].colors[color],
          theme.sizes[size],
          circle && theme.circle,
          fullWidth && theme.fullWidth,
        ]}
        {...rest}
      />
    );
  },
);
Button.displayName = 'Button';
