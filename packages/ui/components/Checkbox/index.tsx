import 'twin.macro';

import { useMergeRefs } from '@floating-ui/react';
import clsx from 'clsx';
import { InputHTMLAttributes, forwardRef, useEffect, useRef } from 'react';

import { Icon } from 'icons';

import { theme } from './theme';
import { Color, Size } from './types';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'placeholder' | 'size' | 'color'> {
  indeterminate?: boolean;
  label?: string;
  size?: Size;
  color?: Color;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ disabled = false, indeterminate, color = 'primary', label, size = 'sm', ...rest }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const combineRef = useMergeRefs([inputRef, ref]);

    useEffect(() => {
      if (indeterminate && inputRef.current) {
        inputRef.current.indeterminate = true;
      } else if (inputRef.current) {
        inputRef.current.indeterminate = false;
      }
    }, [indeterminate]);

    return (
      <label className={clsx('group', disabled && 'disabled')} css={[theme.container.base]}>
        <input
          ref={combineRef}
          className="peer"
          type="checkbox"
          css={[theme.input]}
          disabled={disabled}
          {...rest}
        />
        <div
          css={[
            theme.icon.base,
            theme.icon.sizes[size],
            theme.icon.indeteminate[color],
            theme.icon.colors[color],
            //      theme.icon.hover,
          ]}
        >
          {indeterminate ? (
            <div tw="w-[10px] h-[2px] rounded-[34px]" />
          ) : (
            <Icon name={'Check'} solid={true} />
          )}
        </div>

        {label && <p css={[theme.label]}>{label}</p>}
      </label>
    );
  },
);
Checkbox.displayName = 'Checkbox';
