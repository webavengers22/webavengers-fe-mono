import tw from 'twin.macro';

import { ButtonHTMLAttributes, forwardRef } from 'react';

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ type = 'button', ...rest }, ref) => (
    <button
      ref={ref}
      type={type}
      css={[
        tw`transition-colors duration-200`,
        tw`flex items-center justify-center`,
        tw`rounded`,
        tw`outline-none`,
        tw`disabled:!bg-Gray-300 disabled:text-Gray-600 disabled:cursor-not-allowed`,
      ]}
      {...rest}
    />
  ),
);
IconButton.displayName = 'IconButton';
