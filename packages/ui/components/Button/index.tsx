import React, { ButtonHTMLAttributes, forwardRef } from 'react';

import { theme } from './theme';
import { Color, Shape, Size, Variant } from './types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  variant?: Variant;
  size?: Size;
  color?: Color;
  shape?: Shape;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      fullWidth = false,
      variant = 'filled',
      size = 'md',
      color = 'black',
      shape = 'round',
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
          fullWidth && theme.fullWidth,
          shape && theme.shape[shape],
        ]}
        {...rest}
      />
    );
  },
);
Button.displayName = 'Button';
